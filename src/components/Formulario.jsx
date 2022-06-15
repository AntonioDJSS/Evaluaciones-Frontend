import React from "react";
import { useState } from "react";
import Final from "./Final";
//para crear el usaurio en la api
import axios from "axios";
import clienteAxios from "../config/axios";
function Formulario() {
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
  const [respuesta18, setRespuesta18] = useState('');
  const [respuesta19, setRespuesta19] = useState('');
  const [respuesta20, setRespuesta20] = useState('');

  console.log(respuesta14)
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
      const respuesta = await clienteAxios.post("/evaluaciones",{
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
        respuesta17,
        respuesta18,
        respuesta19,
        respuesta20
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
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
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

        {/* PREGUNTA 1 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 01) </span>Son órganos reguladores de las actividades 
              del Sector Hidrocarburos al día de hoy:
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Secretaría de Hacienda y Crédito Público, Secretaría de
                    Energía, Secretaría del Medio Ambiente y Recursos Naturales.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Secretaría de Energía, Petróleos Mexicanos, Comisión
                    Nacional de Hidrocarburos.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Comisión Nacional de Hidrocarburos, Comisión
                    Reguladora de Energía, Agencia Nacional de Seguridad,
                    Energía y Ambiente.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Secretaría de Energía, Comisión Nacional de
                    Hidrocarburos, Comisión Reguladora de Energía.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 1 */}
        {/* FINAL */}

        {/* PREGUNTA 2 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-0 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 02) </span>En la estructura institucional posterior a la Reforma Energética, son
                considerados órganos diseñadores de políticas:
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> Secretaría de Hacienda y Crédito Público, Secretaría de
                    Energía, Secretaría del Medio Ambiente y Recursos
                    Naturales.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Secretaría de Energía, Petróleos Mexicanos, Comisión
                    Nacional de Hidrocarburos.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Comisión Nacional de Hidrocarburos, Comisión
                    Reguladora de Energía, Agencia Nacional de Seguridad,
                    Energía y Ambiente.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}
                  />
                  <span className="font-bold uppercase">d)</span> Secretaría de Energía, Comisión Nacional de
                    Hidrocarburos, Comisión Reguladora de Energía.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 2 */}
        {/* FINAL */}

        {/* PREGUNTA 3 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 03) </span>Indique cuales son los tres ejes principales de acción de la Agencia Nacional de Seguridad, Energía
                y Ambiente, de acuerdo a lo establecido en la Ley de Hidrocarburos:
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    type="text"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    placeholder="Ingresa tu respuesta aquí"
                    value={respuesta03}
                    onChange={(e) => setRespuesta03(e.target.value)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 3 */}
        {/* FINAL */}

        {/* PREGUNTA 4 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 04) </span>Indique cinco atribuciones de la Comisión Nacional de Hidrocarburos, de acuerdo a lo establecido
                en la Ley de Hidrocarburos:
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                <input
                    name="pregunta04"
                    type="text"
                    placeholder="Ingresa tu respuesta aquí"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={respuesta04}
                    onChange={(e) => setRespuesta04(e.target.value)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 4 */}
        {/* FINAL */}

        {/* PREGUNTA 5 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 05) </span>En la cadena de valor del Sector Hidrocarburos, en que etapas tiene
                injerencia la Agencia Nacional de Seguridad, Energía y Ambiente:
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> UPSTREAM, MIDSTREAM y DOWNSTREAM
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> MIDSTREAM y DOWNSTREAM
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Sólo UPSTREAM
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 5 */}
        {/* FINAL */}
  {/* PREGUNTA 6 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 06) </span>En la cadena de valor del Sector Hidrocarburos, en que etapas tiene
injerencia la Comisión Nacional de Hidrocarburos:
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span>{" "}
                  UPSTREAM, MIDSTREAM y DOWNSTREAM
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>{" "}
                  MIDSTREAM y DOWNSTREAM
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span>{" "}
                  Sólo UPSTREAM                
                  </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 6 */}
        {/* FINAL */}

        {/* PREGUNTA 7 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 07) </span>En la cadena de valor del Sector Hidrocarburos, en que etapas tiene
                injerencia la Comisión Reguladora de Energía:
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> UPSTREAM, MIDSTREAM y DOWNSTREAM
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> MIDSTREAM y DOWNSTREAM
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Sólo UPSTREAM
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 7 */}
        {/* FINAL */}

        {/* PREGUNTA 8 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 08) </span>La Agencia Nacional de Seguridad, Energía y Ambiente tiene injerencia
              en la regulación de pozos?: 
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span>Sí
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> No
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 8 */}
        {/* FINAL */}

        {/* PREGUNTA 9 */}
        {/* INICIO */}

        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 09) </span>A quién corresponde la aplicación e interpretación de los Lineamientos de Exploración y Extracción
                de Hidrocarburos?
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    type="text"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    placeholder="Ingresa tu respuesta aquí"
                    value={respuesta09}
                    onChange={(e) => setRespuesta09(e.target.value)}
                  />                
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 9 */}
        {/* FINAL */}

        {/* PREGUNTA 10 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 10) </span>Mencione al menos tres principios en materia de seguridad y protección al medio ambiente, que
            deben de seguirse en la realización de actividades de Exploración y Extracción de Hidrocarburos
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    type="text"
                    placeholder="Ingresa tu respuesta aquí"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={respuesta10}
                    onChange={(e) => setRespuesta10(e.target.value)}
                  />                
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 10 */}
        {/* FINAL */}

        {/* PREGUNTA 11 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 11) </span>IMencione al menos siete aspectos que considere Ud. deban formar parte del Análisis de Riesgos de
              Proceso de un Proyecto<br></br>
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta11"
                    type="text"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    placeholder="Ingresa tu respuesta aquí"
                    value={respuesta11}
                    onChange={(e) => setRespuesta11(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 11 */}
        {/* FINAL */}

        {/* PREGUNTA 12 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 12) </span>Explique brevemente tres técnicas / metodologías que se emplean el Sector Hidrocarburos para la
              identificación de peligros
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta12"
                    value={respuesta12}
                    type="text"
                    placeholder="Ingresa tu respuesta aquí"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    onChange={e =>setRespuesta12(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 12 */}
        {/* FINAL */}

        {/* PREGUNTA 13 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 13) </span>Mencione cinco tramites que requieren ser gestionados ante ASEA previo a iniciar la Construcción de
            un Pozo Exploratorio 
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta13"
                    value={respuesta13}
                    type="text"
                    placeholder="Ingresa tu respuesta aquí"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    onChange={e =>setRespuesta13(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 13 */}
        {/* FINAL */}

        {/* PREGUNTA 14 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 14) </span>Mencione los dos trámites que requieren ser gestionados ante ASEA en materia de Sistemas de
              Administración de Seguridad Industrial, Seguridad Operativa y Protección al Medio Ambiente; para
              poder estar en condiciones de iniciar operaciones en un Proyecto de Exploracion y/o Extracción de
              Hidrocarburos
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta14"
                    value={respuesta14}
                    type="text"
                    placeholder="Ingresa tu respuesta aquí"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    onChange={e =>setRespuesta14(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 14 */}
        {/* FINAL */}

        {/* PREGUNTA 15 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 15) </span>¿Cuándo es obligatorio que un Regulado que pretende realizar operaciones de Exploración y
Extracción de Hidrocarburos solicite autorización para implementar su Sistema de Administración en
materia de Seguridad Industrial, Seguridad Operativa y Protección al Medio Ambiente?
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta15"
                    value={respuesta15}
                    type="text"
                    placeholder="Ingresa tu respuesta aquí"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    onChange={e =>setRespuesta15(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 15 */}
        {/* FINAL */}

        
        {/* PREGUNTA 16 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 16) </span>Para un Proyecto de Exploración de Hidrocarburos en Aguas Profundas, que contempla en su "fase
              01" la perforación de dos Pozos Exploratorios y dos Pozos de Evaluación, ¿Qué pólizas de seguros se
              requieren?
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta16"
                    value={respuesta16}
                    type="text"
                    placeholder="Ingresa tu respuesta aquí"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    onChange={e =>setRespuesta16(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 16 */}
        {/* FINAL */}

        {/* PREGUNTA 17 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 17) </span>Mencione tres obligaciones contractuales en materia de gestión de trámites para encontrarse en
            condiciones de iniciar operaciones de perforación de pozos petroleros
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta17"
                    value={respuesta17}
                    type="text"
                    placeholder="Ingresa tu respuesta aquí"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    onChange={e =>setRespuesta17(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 17 */}
        {/* FINAL */}


        {/* PREGUNTA 18 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 18) </span>Mencione los tipos de Pozos que requieren Autorización emitida por la Comisión Nacional de
              Hidrocarburos a fin de iniciar su perforación
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta18"
                    value={respuesta18}
                    placeholder="Ingresa tu respuesta aquí"
                    type="text"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    onChange={e =>setRespuesta18(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 18*/}
        {/* FINAL */}


      {/* PREGUNTA 19 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 19) </span>De acuerdo a la Comisión Nacional de Hidrocarburos, ¿En qué momento inicia la perforación de un
                Pozo Petrolero?
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta19"
                    value={respuesta19}
                    placeholder="Ingresa tu respuesta aquí"
                    type="text"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    onChange={e =>setRespuesta19(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 19*/}
        {/* FINAL */}

        {/* PREGUNTA 20 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 20) </span>Indique, cual es el principal instrumento normativo que utiliza la Comisión Nacional de Hidrocarburos
              para definir los montos de sanciones por incumplimientos a los Lineamientos de Perforación de Pozos
              de esta Autoridad
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg w-11/12">
              <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta20"
                    value={respuesta20}
                    placeholder="Ingresa tu respuesta aquí"
                    type="text"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    onChange={e =>setRespuesta20(e.target.value)}

                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 20*/}
        {/* FINAL */}
       
      </form>

      <div className="bg-white my-10 py-10 px-5 shadow-md rounded-md">
      <div className="mt-5 md:my-5 shadow-lg px-5 py-1 rounded-xl bg-green-100">
            <p className="block text-center my-5 text-green-900">
            Te recomendamos corroborar que todos las preguntas han sido contestadas, no selecciones el checkbox si no te encuentras completamente seguro.
            </p>
          </div>
        <div className="flex justify-center">
          <div className="flex mb-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 mt-6 cursor-pointer"
                value="Habilitar"
                onChange={handleSubmit}
              />
              <div className="block text-center mt-6 text-gray-500">
                He concluido el cuestionario y deseo enviar mis respuestas{" "}
              </div>
            </label>
          </div>
        </div>

        <div className="flex justify-center">
        <button
          type="submit"
          className=" bg-rose-600 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-rose-700 md:w-auto md:px-24"
          onClick={() => setMostrarFinal(!mostrarFinal)}
          disabled={!botonActivo}
        >
          {mostrarFinal ? false : "ENVIAR EVALUACION"}
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

export default Formulario;
