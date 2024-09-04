import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Header from "./components/Header"


const App = () => {
  return (
    <BrowserRouter>
    <div className="bg-gray min-h-screen md:px-[60px] md:py-[32px] py-[32px] px-[16px]">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App