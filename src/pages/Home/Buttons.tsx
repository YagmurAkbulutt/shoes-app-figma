type Props = {
    open: () => void
}

const Buttons = ({open} : Props) => {
  return (
    <div className="mt-5 flex gap-10 lg:hidden">
        <button onClick={open} className="bg-white rounded-md p-1 px-4 flex-1 flex items-center gap-4 justify-between">Filters <img src="/list.png" /></button>
        <button className="bg-white rounded-md p-1 px-4 flex-1 flex items-center gap-4 justify-between">Trending <img src="/trending.png" /></button>
      </div>
  )
}

export default Buttons