import React from "react";
import { useState } from "react";
import Final from "./Final";
//para crear el usaurio en la api
import clienteAxios from "../config/axios";
function EncuestaSatisfaccion() {
  const [mostrarFinal, setMostrarFinal] = useState(false);

  const [botonActivo, setBotonActivo] = useState(false);
  const [boxSelected, setBoxSelected] = useState([]);

  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [respuesta01, setRespuesta01] = useState('');
  const [respuesta02, setRespuesta02] = useState('');
  const [respuesta03, setRespuesta03] = useState('');
  const [respuesta04, setRespuesta04] = useState('');
  const [respuesta05, setRespuesta05] = useState('');
  const [respuesta06, setRespuesta06] = useState('');
  const [respuesta07, setRespuesta07] = useState('');
  const [respuesta08, setRespuesta08] = useState('');
  const [respuesta09, setRespuesta09] = useState('');
  const [respuesta10, setRespuesta10] = useState('');
  const [respuesta11, setRespuesta11] = useState('');
  const [respuesta12, setRespuesta12] = useState('');
  const [respuesta13, setRespuesta13] = useState('');
  const [respuesta14, setRespuesta14] = useState('');
  const [respuesta15, setRespuesta15] = useState('');
  const [respuesta16, setRespuesta16] = useState('');
  const [respuesta17, setRespuesta17] = useState('');


  //
  const handleSubmit = async(e) => {
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

    //crear el usuario en la api
    try {
      const respuesta = await clienteAxios.post("/atmosferas",{
        nombre,
        email,
        respuesta01,
        respuesta02,
        respuesta03,
        respuesta04,
        respuesta05,
        respuesta06,
        respuesta07,
        respuesta08,
        respuesta09,
        respuesta10,
        respuesta11,
        respuesta12,
        respuesta13,
        respuesta14,
        respuesta15,
        respuesta16,
        respuesta17
        
      })
      console.log(respuesta)
    } catch (error) {
      console.log(error)
    }
  };



  
  return (
    <div>
      <section className={`${mostrarFinal ? "hidden" : ""}`}>
      <form>
         {/* Nombre */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
        <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Nombre completo del evaluado"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
          
                <div className="flex justify-center">
                </div>
                </div>

        {/* Correo*/}
        {/* FINAL */}

         {/* Seccion */}
        {/* INICIO */}
        <div className=" bg-amber-50 py-1 px-5 mb-10 shadow-md rounded-2xl">
        <div className="my-5 flex justify-center">
                <label className="block text-center mt-0 text-amber-900">
                  Sobre el instructor
                </label>
               
        </div>
        </div>

        {/* Seccion*/}
        {/* FINAL */}


        {/* PREGUNTA 1 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 01) </span>El instructor proyecto una buena imagen personal
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre   ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 1 */}
        {/* FINAL */}


        {/* PREGUNTA 2 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 02) </span> Demostro calidez en su trato generando un ambiente agradable y de confianza
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre   ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre   ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia   ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 2 */}
        {/* FINAL */}

        {/* PREGUNTA 3 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 03) </span> El instructor inicio y termino puntualmente la sesion
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
         
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 3 */}
        {/* FINAL */}


        {/* PREGUNTA 4 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 04) </span> El instructor mostro dominio del tema y resolvio las dudas del grupo
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 4 */}
        {/* FINAL */}

            {/* PREGUNTA 5 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 05) </span> Mantuvo el interes y promovio la participacion del grupo
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️            
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 5 */}
        {/* FINAL */}

        {/* PREGUNTA 6 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 06) </span> Combino de manera efectiva conceptos con dinamicas y ejercicios practicos
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 6 */}
        {/* FINAL */}

           {/* Seccion */}
        {/* INICIO */}
        <div className=" bg-amber-50 py-1 px-5 mb-10 shadow-md rounded-2xl">
        <div className="my-5 flex justify-center">
                <label className="block text-center mt-0 text-amber-900">
                  Sobre el contenido
                </label>
               
        </div>
        </div>

        {/* Seccion*/}
        {/* FINAL */}

           {/* PREGUNTA 7 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 07) </span> Los temas vistos tienen utilidad para mi puesto
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 7 */}
        {/* FINAL */}

           {/* PREGUNTA 8 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 08) </span> Los temas vistos aportan valor para mi vida personal
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 8 */}
        {/* FINAL */}

           {/* PREGUNTA 9 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 09) </span> El contenido refleja profundidad
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 9 */}
        {/* FINAL */}
       

           {/* PREGUNTA 10 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 10) </span> El curso combino teoria y practica
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 10 */}
        {/* FINAL */}


           {/* PREGUNTA 11 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 11) </span> Los temas tratados fueron de interes y acorde al objetivo del curso
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta11"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta11(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta11"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta11(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta11"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta11(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta11"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta11(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta11"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta11(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 11 */}
        {/* FINAL */}

         {/* PREGUNTA 12 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 12) </span> Los ejercicios y/o dinamicas realizadas ayudaron a reforzar los temas tratados
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta12"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta12(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta12"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta12(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta12"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta12(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta12"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta12(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta12"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta12(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 12 */}
        {/* FINAL */}
        
             {/* Seccion */}
        {/* INICIO */}
        <div className="bg-amber-50 py-1 px-5 mb-10 shadow-md rounded-2xl">
        <div className="my-5 flex justify-center">
                <label className="block text-center mt-0 text-amber-900">
                  Sobre el aula 
                </label>
               
        </div>
        </div>

        {/* Seccion*/}
        {/* FINAL */}

        {/* PREGUNTA 13 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 13) </span> El aula conto con el espacio suficiente para la realizacion del curso
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta13"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta13(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta13"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta13(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta13"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta13(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta13"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta13(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta13"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta13(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 13 */}
        {/* FINAL */}

        {/* PREGUNTA 14 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 14) </span> El aula conto con la temperatura confortable y comoda
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta14"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta14(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta14"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta14(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta14"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta14(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta14"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta14(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta14"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta14(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 14 */}
        {/* FINAL */}


        {/* PREGUNTA 15 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 15) </span>  La pantalla se vio con claridad desde todos los puntos del aula
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta15"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta15(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta15"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta15(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta15"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta15(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta15"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta15(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta15"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta15(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 15 */}
        {/* FINAL */}


           {/* PREGUNTA 16 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 16) </span>  En general que experiencia te llevas del curso
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta16"
                    value="A"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta16(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siempre ⭐️⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta16"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta16(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>Casi siempre ⭐️⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta16"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta16(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Con frecuencia ⭐️⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta16"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta16(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Casi nunca ⭐️⭐️
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta16"
                    value="E"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta16(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Nunca ⭐️
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 16 */}
        {/* FINAL */}



         {/* PREGUNTA 17*/}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 17) </span>Comentarios:
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta17"
                    type="text"
                    className="border w-full p-3 bg-gray-50 rounded-xl"
                    placeholder="Ingresa tu respuesta aquí"
                    value={respuesta17}
                    onChange={(e) => setRespuesta17(e.target.value)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 17 */}
        {/* FINAL */}

      </form>

      <div className="bg-white my-10 py-10 px-5 shadow-md rounded-2xl">
      <div className="mt-5 md:my-5 shadow-lg px-5 py-1 rounded-xl bg-green-100">
            <p className="block text-center my-5 text-green-900">
            Te recomendamos de la manera más atenta el corroborar que todas las preguntas han sido contestadas, no selecciones el checkbox si no te encuentras completamente seguro...  ¡No está de más dar otro vistazo!
            </p>
          </div>
        <div className="flex justify-center">
          <div className="flex mb-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 mt-6 cursor-pointer"
                value="Habilitar"
                onChange={handleSubmit}
              />
              <div className="block text-center mt-6 text-gray-500">
                He concluido el cuestionario y deseo enviar mis respuestas.{" "}
              </div>
            </label>
          </div>
        </div>

        <div className="flex justify-center">
        <button
          type="submit"
          className=" bg-amber-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-amber-600 md:w-auto md:px-24"
          onClick={() => setMostrarFinal(!mostrarFinal)}
          disabled={!botonActivo}
        >
          {mostrarFinal ? false : "ENVIAR EVALUACIÓN"}
        </button>
        </div>
      </div>
      </section>
      <div
              className={`${
                mostrarFinal ? "block" : "hidden"
              } block md:w-1/2 lg:w-full`}
            >
              <Final />
            </div>
    </div>
  );
}

export default EncuestaSatisfaccion;
