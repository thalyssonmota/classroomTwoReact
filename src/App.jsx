import { useState } from "react";
import BackCard from "./components/BackCard";
import CardFront from "./components/FrontCard";

export default function App() {
  const [nome, setNome] = useState("")
  const [numero, setNumero] = useState("")
  const [mes, setMes] = useState(0);
  const [ano, setAno] = useState(0);
  const [CVV, setCvv] = useState(0);
  const [senha, setSenha] = useState("");

  function pagar(params) {
    console.log(nome);
    console.log(numero);
    console.log(mes);
    console.log(ano);
    console.log(CVV);
    console.log(senha);







  }
  return (
    <div className="w-full h-screen flex">

      <div className="w-[40%] h-full bg-[#271540] relative">
        <div className="absolute top-10 left-40">
          <CardFront />
        </div>

        <div className="absolute top-100 left-90">
          <BackCard />
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
                (event) => setNumero(event.target.value)
              }
              type="number"
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