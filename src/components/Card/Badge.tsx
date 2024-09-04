

const Badge = ({discount} : {discount?: number}) => {
  return (
    <span className={`absolute rounded-tl-[24px] rounded-br-[24px] px-4 py-3 ${discount ? "bg-orange-500"  : "bg-red-500"} font-semibold text-white text-sm`}>{discount ? "%" + discount + " off" : "New"}</span>
  )
}

export default Badge