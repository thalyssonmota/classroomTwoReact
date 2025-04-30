export default function BackCard({CVV}) {
  return (
    <div className="w-[550px] h-[300px] bg-black rounded-xl pt-[40px] flex flex-col items-center">
      <div className="w-full h-[70px] bg-[#2f2f2f]"></div>

      <div className="w-[450px] h-[60px] bg-[#AEB6BF] flex items-center justify-end mt-8 ">
        <p className="text-black text-[26px] mr-4">{CVV || "000"}</p>
      </div>
    </div>
  )
}