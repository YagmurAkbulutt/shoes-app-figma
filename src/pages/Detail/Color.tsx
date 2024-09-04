import { colors } from "../../utils/constants";
import { useState } from "react";

const Color = ({ data }: { data: string }) => {
  const arr = data.split(",");
  const [selected, setSelected] = useState<string>("");

  const toggle = (num: string) => {
    if (selected === num) {
      // Seçili numaraya tıklarsa seçimi kaldır
      setSelected("");
    } else {
      // Farklı numaraya tıklarsa seç
      setSelected(num);
    }
  };

  return (
    <div>
      <h2 className="mb-3 font-semibold">COLOR</h2>
      <div className="flex gap-4">
        {arr.map((item) => {
          // İd'si bilinen elemanın renk koduna erişmek için
          const color = colors.find((i) => i.id === item);

          return (
            <div
              key={item}
              style={{ background: color?.code || "gray" }}
              className={`w-8 h-8 rounded-full cursor-pointer ${
                selected === item ? "ring-[4px] ring-offset-2 ring-gray-700" : ""
              }`}
              onClick={() => toggle(item)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
