import { Link } from "react-router-dom"

const Header = () => {


  return (
    <header className="py-10 bg-rose-600">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-rose-200 text-center">Sistema de Evaluación{' '} <span className="text-white font-black">Continua</span>
            </h1>
        </div>
    </header>
  )
}

export default Header