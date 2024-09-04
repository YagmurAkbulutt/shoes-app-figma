import { Shoe } from "../../types"
import calcDiscount from "../../utils/calcDiscount"


const Head = ({data} : {data : Shoe}) => {
  const price = calcDiscount(data.price, data.discount)

  return (
    <div className="flex flex-col gap-4">
        <span className={`px-4 py-3 ${data.discount ? "bg-orange-400" : "bg-blue"} text-white rounded-[12px] w-fit`}>{data.discount ? `%${data.discount} Discount`  : "New Release"}</span>
        <h1 className="font-semibold text-3xl">{data.name}</h1>
        <div>
        {
          data.discount ? (<p className="text-[24px] ">
            <span className="font-semibold pe-3  text-blue">${price}</span>
            <span className="line-through">(${data.price})</span>
          </p>) : (<span className="font-semibold pe-3 text-[24px]  text-blue">${price}</span>)
        }
        </div>
    </div>
  )
}

export default Head