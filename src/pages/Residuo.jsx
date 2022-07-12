import React from "react";
import { useState } from "react";

import Footer from "../components/Footer";
import Formulario from "../components/Residuos";
import Header from "../components/Header";

function Residuo() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [botonActivo, setBotonActivo] = useState(false);
  const [boxSelected, setBoxSelected] = useState([]);

  const handleSubmit = (e) => {
    console.log(e.target.value);
    let aux = null;

    if (boxSelected.includes(e.target.value)) {
      aux = boxSelected.filter((elemento) => elemento !== e.target.value);
      setBoxSelected(aux);
    } else {
      aux = boxSelected.concat(e.target.value);
    }
    setBoxSelected(aux);

    if (aux.length > 0) {
      setBotonActivo(true);
    } else {
      setBotonActivo(false);
    }
  };

  return (
    <>
        <section className="flex h-screen m-auto">
        <section className="align-middle lg:mx-60">
        <Header />
            <div className={`${mostrarFormulario ? "hidden" : ""}`}>
            <div className="mt-2 mb-5 shadow-lg px-5 py-6 rounded-xl bg-amber-100">
            <div>
            <h1 className="uppercase text-amber-600 font-black text-5xl text-center">
            Evaluación{" "}
              <span className="text-black">FINAL</span>
            </h1>
          </div>
            <p className="block text-center mt-4 text-amber-900">
                Cumplimiento Normativo en Materia de Residuos para el Sector Hidrocarburos
            </p>
          </div>

{/*               <form className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-lg rounded-md">
                <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Nombre completo del evaluado"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  //value={email}
                  //onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Correo Electronico
                </label>
                <input
                  type="email"
                  placeholder="Ingresa tu correo electronico"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  //value={password}
                  //onChange={(e) => setPassword(e.target.value)}
                />
              </div>
                <div className="mt-2 lg:flex lg:justify-center">
                  <div className="flex mb-5">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 mt-6 cursor-pointer"
                        value="Habilitar"
                        onChange={handleSubmit}
                      />
                      <div className="block text-center mt-6 text-gray-500">
                        He rellenado los campos y corroborado mis datos{" "}
                        <span className="text-rose-500">
                          ¡Deseo continuar!
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex justify-center">
                <button
                  type="button"
                  className=" bg-rose-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-rose-700 md:w-auto md:px-24"
                  onClick={() => setMostrarFormulario(!mostrarFormulario)}
                  disabled={!botonActivo}
                >
                  {mostrarFormulario ? false : "Iniciar Evaluación"}
                </button>
                </div>
              </form> */}
            </div>

            {/*  FORMULARIO PREGUNTAS */}
            {/*  INICIO */}
                          <Formulario />

            {/*  FORMULARIO PREGUNTAS */}
            {/*  FINAL */}

            <Footer />
      </section>
      </section>
    </>
  );
}

export default Residuo;
