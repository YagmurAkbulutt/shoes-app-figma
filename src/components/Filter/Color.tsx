import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectedProps } from "./Size";
import { colors } from "../../utils/constants";



const Color = ({selected, setSelected} : SelectedProps) => {
  const [params, setParams] = useSearchParams()

    //renk stateda varsa çıkart yoksa ekle
    const toggle = (num: string) => {
      const found = selected.find((i) => i === num);
  
      if (found) {
        setSelected(selected.filter((i) => i !== num));
      } else {
        setSelected([...selected, num]);
      }
    };

    useEffect(() => {
      if (selected.length > 0) {
        // seçili renk varsa , ekle
        params.set("color", selected.join(","));
        setParams(params);
      } else {
        //seçili renk yoksa urlde parametreyi sil 
        params.delete("color");
        setParams(params);
      }
    }, [selected]);
    
    return (
      <div>
        <h2 className="font-semibold mb-[16px]">Color</h2>
        <div className="grid grid-cols-5 gap-[16px]">
          {colors.map((i) => {
              const found = selected.find((itm) => itm === i.id)
            return (
              <p
              style={{background: i.code}}
                key={i.id}
                onClick={() => toggle(i.id)}
                className={`py-[8px] px-[16px] rounded-md text-center text-transparent select-none cursor-pointer transition hover:bg-zinc-400  ${found ? "ring-[4px]" : ""}`}
              >
            .
              </p>
            );
          })}
        </div>
      </div>
    );
}

export default Color