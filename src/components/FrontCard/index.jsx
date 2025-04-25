import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
import { SiMastercard } from "react-icons/si";

export default function CardFront() {
  return (
    <div className="w-[550px] h-[300px] bg-black rounded-xl">

      {/* Card topo */}
      <div className="w-full h-[30%] flex">
        <div className="w-[50%] h-full flex items-center pl-6">
          <SiMastercard size={90} color="#ffffff" />
        </div>
        <div className="w-[50%] h-full flex p-4 justify-end items-center">
          <p className="text-white font-bold font-serif text-[20px]">M6 Bank</p>
        </div>
      </div>

      {/* Card meio */}
      <div className="w-full h-[40%] flex flex-col">
        <div className="w-full h-[60%] flex items-center pl-6">
          <FcSimCardChip size={70} />
          <LuNfc size={50} color="#ffffff" />
        </div>
        <div className="w-full h-[40%] pl-6">
          <p className="text-[45px] font-serif text-gray-500 ">0000 0000 0000 0000</p>
        </div>

      </div>

      {/* Card fim */}
      <div className="w-full h-[30%] pl-6 flex items-center">
        <p className="text-[40px] text-white">Nome no Cartão</p>
      </div>


    </div>
  )
}