import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import BackCard from "./components/BackCard";
import CardFront from "./components/FrontCard";
import instance from "./api/instance";

export default function App() {
  const [nome, setNome] = useState("")
  const [numero, setNumero] = useState("")
  const [mes, setMes] = useState(0);
  const [ano, setAno] = useState(0);
  const [CVV, setCvv] = useState(0);
  const [senha, setSenha] = useState("");

  function formatNumero(evento) {
    let numero = evento.target.value
    let numeroFormatado = numero.replace(/\D/g, '') // Remove tudo que não for número
    numeroFormatado = numeroFormatado.substring(0, 16) // Limita a 16 Dígitos
    numeroFormatado = numeroFormatado.replace(/(\d{4})/g, '$1 ').trim() // Adiciona espaço a cada 4 dígitos
    setNumero(numeroFormatado)
  }

  async function pagar() {
    if (!nome || !numero || !mes || !ano || !CVV || !senha) {
      return toast.error("Preencha todos os campos!")
    }
    if (numero.replace(/\s/g, '').length !== 16) {
      return toast.error("Número do cartão inválido!")
    }
    if (CVV.length !== 3) {
      return toast.error("CVV inválido!")
    }
    if (mes > 12 || mes < 1) {
      return toast.error("Ano de expiração inválido!")
    }
    if (ano.length !== 2) {
      return toast.error("Data de expedição inválida!")
    }
    if (senha.length < 4) {
      return toast.error("Senha inválida!")
    }

    try {
      const response = await instance.post("/creditcards", {
        name: nome,
        number: numero.replace(/\s/g, ''),
        expiration: `${mes}/${ano}`,
        cvv: CVV,
        password: senha
      })

      return toast.success("Pagamento realizado com sucesso!")
    }
    catch (error) {
      return toast.error("Erro ao processar o pagamento!")
    }

  }

  return (
    <div className="w-full h-screen flex">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        closeOnClick
        pauseOnFocusLoss
      />

      <div className="w-[40%] h-full bg-[#271540] relative">
        <div className="absolute top-10 left-40">
          <CardFront nome={nome} numero={numero} />
        </div>

        <div className="absolute top-100 left-90">
          <BackCard CVV={CVV} />
        </div>
      </div>

      <div className="w-[60%] h-full flex flex-col items-end p-[40px]">
        <h1 className="text-[45px] w-[70%] font-bold font-sans h-150px">Preencha os campos para concluir o pagamento!</h1>
        <div className="w-[60%] h-auto min-h-[200px] flex flex-col gap-4">
          <div className="w-full flex flex-col">
            <label htmlFor="nome" className="text-[20px] font-serif">Nome no Cartão</label>
            <input
              onChange={
                (event) => setNome(event.target.value)
              }
              type="text"
              className="w-full h-[40px] pl-2 rounded-md bg-[#d9d9d9]" />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="numero" className="text-[20px] font-serif">Número do Cartão</label>
            <input
              onChange={
                (event) => formatNumero(event)
              }
              value={numero}
              type="text"
              className="w-full h-[40px] pl-2 rounded-md bg-[#d9d9d9]" />
          </div>
          <div className="flex">
            <div className="w-[70%] flex flex-col">
              <label htmlFor="date" className="text-[20px]">Data de Expiração</label>
              <div className="w-full flex gap-2">
                <input
                  onChange={
                    (event) => setMes(event.target.value)
                  }
                  type="number"
                  placeholder="MM"
                  className="w-[50%] h-[40px] rounded-md bg-[#d9d9d9] pl-2" />
                <input
                  onChange={
                    (event) => setAno(event.target.value)
                  }
                  type="number"
                  placeholder="AA"
                  className="w-[50%] h-[40px] rounded-md bg-[#d9d9d9] pl-2" />
              </div>

            </div>
            <div className="w-[30%] flex flex-col pl-2 ">
              <label htmlFor="" className="text-[20px] font-sans">CVV</label>
              <input
                onChange={
                  (event) => setCvv(event.target.value)
                }
                type="number"
                className="w-full h-[40px] rounded-md bg-[#d9d9d9] pl-2" />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="" className="text-[20px] font-serif">Senha do Cartão</label>
            <input
              onChange={
                (event) => setSenha(event.target.value)
              }
              type="password"
              className="w-full h-[40px] rounded-md pl-2 bg-[#d9d9d9]" />
          </div>

          <button
            onClick={
              pagar
            }
            className="w-full h-[50px] rounded-md bg-[#271540] text-white font-bold font-serif cursor-pointer">Pagar</button>

        </div>

      </div>

    </div>
  )
}