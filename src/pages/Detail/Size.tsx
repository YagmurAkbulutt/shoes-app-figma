import { useState } from "react";


const Size = ({data} : {data:string}) => {
  const[selected, setSelected] = useState<string>("")

  const arr = data.split(",")

  const numbers = ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];

  const toggle = (num: string) => {
    

    if (selected === num) {
      //seçili numaraya tıkalrsa seçimi kaldır
      setSelected("");
    } else {
      //farklı numaraya tıklarsa seç 
      setSelected(num);
    }
  };

  return (
    <div>
      <h2 className="mb-3 font-semibold">SIZE</h2>
      <div className="grid grid-cols-5 gap-[16px]">
        {numbers.map((num) => {
          const found = selected === num;

          return (
            <button
            disabled={!arr.includes(num)}
              key={num}
              onClick={() => toggle(num)}
              className={`py-[8px] px-[16px] lg:px-[0px] rounded-md text-center cursor-pointer transition disabled:bg-[#D2D1D3] disabled:text-[#8F8C91] ${
                found ? "bg-black text-white" : "bg-white text-dark"
              } hover:bg-zinc-400`}
            >
              <span>{num}</span>
            </button>
          );
        })}
      </div>
    </div>
  )
}

export default Size