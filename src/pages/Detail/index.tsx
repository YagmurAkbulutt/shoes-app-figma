import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import api from "../../utils/api"
import Loader from "../../components/Loader"
import Error from "../../components/Error"
import { Shoe } from "../../types"
import Head from "./Head"
import Color from "./Color"
import Size from "./Size"


const Detail = () => {
  const {id} = useParams()
  const {isLoading, error, data} = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => api.get(`/shoes/${id}`).then((res) => res.data)
  })

  return (
    <div className="mt-8">
      {isLoading ? (<Loader/>) : error ? (<Error message={error.message}/>) :(data && <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
      <div className="lg:col-span-2  grid grid-cols-2 grid-rows-2 h-screen gap-4 rounded-[48px] overflow-hidden">
        {data?.picture.map((url,i) => <img key={i} src={url} className="w-full h-full object-cover"/>)}

      </div>

      <div className="flex flex-col gap-8">
        <Head data={data}/>
        <Color data={data.color}/>
        <Size data={data.size}/>

        <p>
          <h2 className="font-semibold">ABOUT THIS PRODUCT</h2>

          <p className="mt-2" dangerouslySetInnerHTML={{__html:data.description}}></p>
        </p>

      </div>
      
      </section>)} 
    </div>
  )
}

export default Detail