import React from "react";
import { useState } from "react";
import Final from "./Final";
//para crear el usaurio en la api
import axios from "axios";
function Formulario() {
  const [mostrarFinal, setMostrarFinal] = useState(false);

  const [botonActivo, setBotonActivo] = useState(false);
  const [boxSelected, setBoxSelected] = useState([]);
//------------------------------------------------------
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
      const url = "http://localhost:4000/evaluaciones"
      const respuesta = await axios.post(url,{
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
        respuesta15
      })
      console.log(respuesta)
    } catch (error) {
      console.log(error)
    }
  };



  
  return (
    <div>
      <section className={`${mostrarFinal ? "hidden" : ""}`}>
      <form className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        {/* PREGUNTA 1 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-md">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 01) </span>Es el tratado
              internacional al cual se encuentra adherido México y que expresa
              el compromiso nacional para contribuir a la reducción de Emisiones
              de Gases de Efecto Invernadero a nivel mundial.
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
                  <span className="uppercase font-bold">a)</span> Protocolo de
                  Kioto sobre Cambio Climático.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Acuerdo de
                  París.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Convenio
                  MARPOL – Anexo VI.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Iniciativa
                  Global de Metano (GMI, por sus siglas en inglés).
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
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-red-400 ">Pregunta 02) </span>De acuerdo con
              los Lineamientos para la prevención y el control integral de las
              emisiones de metano del Sector Hidrocarburos (los Lineamientos de
              Emisiones de Metano), se consideran instalaciones existentes las
              que,…
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
                  <span className="uppercase font-bold">a)</span> Sin haber sido
                  construidas, cuenten con un permiso otorgado por la SENER
                  previo a la entrada en vigor de los Lineamientos de Emisiones
                  de Metano.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Previo a la
                  entrada en vigor de los Lineamientos de Emisiones de Metano
                  hayan sido construidas.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Sin haber sido
                  construidas, cuenten con un permiso otorgado por la CNH previo
                  a la entrada en vigor de los Lineamientos de Emisiones de
                  Metano.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}
                  />
                  <span className="font-bold uppercase">d)</span> Todas las
                  anteriores.
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
              <span className="text-red-400 ">Pregunta 03) </span>De acuerdo con
              los Lineamientos de Emisiones de Metano, es la mejor práctica
              operativa diseñada para identificar equipos, incluyendo sus
              componentes, así como las operaciones en pozos en las que se
              presenten o puedan presentarse fugas que deban ser reparadas en un
              periodo determinado con objeto de reducir y controlar las
              emisiones de metano.
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> Detección y
                  Reparación de Fugas.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Desfogue.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Mantenimiento
                  Correctivo.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}


                  />
                  <span className="font-bold uppercase">d)</span> Mantenimiento
                  Preventivo.
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
              <span className="text-red-400 ">Pregunta 04) </span>Son
              metodologías aceptadas para la cuantificación de emisiones con
              base en calculos de acuerdo con los Lineamientos de Emisiones de
              Metano.
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> Balance de
                  materia, modelos matemáticos y cálculos de ingeniería;
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Factores de
                  emisión de los equipos, establecidos por el fabricante;
                  Factores de emisión establecidos por el Grupo
                  Intergubernamental de Expertos sobre el Cambio Climático
                  (IPCC, por sus siglas en inglés) y Factores de emisión para el
                  país o específicos para los equipos y/o Componentes.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Balance de
                  materia, modelos matemáticos, factores de emisión
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Todos los
                  anteriores.
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
              <span className="text-red-400 ">Pregunta 05) </span>Emisión
              deliberada y controlada de gases y vapores a la atmósfera, para
              mantener la seguridad operativa en las actividades del Sector
              Hidrocarburos.
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
                  <span className="uppercase font-bold">a)</span> Detección y
                  Reparación de Fugas.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Desfogue
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Venteo de
                  Hidrocarburos.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Fuga.
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
              <span className="text-red-400 ">Pregunta 06) </span>Son etapas del
              diagnóstico que se deben abarcar en la elaboración de un Programa
              para la Prevención y Control Integral de Emisiones de Metano
              (PPCIEM).
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
                  Establecimiento de un Año base y un Programa de Detección y
                  Reparación de Fugas.
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
                  Identificación, Clasificación y Cuantificación de las
                  emisiones de metano.
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
                  Establecimiento de un Año base y el Planteamiento de Metas.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}
                  />
                  <span className="font-bold uppercase">d)</span>{" "}
                  Identificación, Control y Reporte de las emisiones de metano.
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
              <span className="text-red-400 ">Pregunta 07) </span>Son principios
              que se deben observar al realizar la cuantificación de las
              emisiones de metano:
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
                  <span className="uppercase font-bold">a)</span> Transparencia,
                  Relevancia, Consistencia y Cobertura.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Trazabilidad,
                  Cobertura, Oportunidad y Sustentabilidad.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Transparencia,
                  Cobertura, Consistencia y Sustentabilidad.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}
                  />
                  <span className="font-bold uppercase">d)</span> Transparencia,
                  Cobertura, Oportunidad y Sustentabilidad.
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
              <span className="text-red-400 ">Pregunta 08) </span>En referencia
              a los Lineamientos para la prevención y el control integral de las
              emisiones de metano del Sector Hidrocarburos, son sistemas y
              equipos considerados en el Título Tercero “De las Acciones de
              Prevención y Control Integral de Emisiones”:
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
                  <span className="uppercase font-bold">a)</span> Compresores,
                  Bombas Neumáticas, Sepradores y Tanques.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Equipos OGI,
                  Equipos de Medición y Sistemas de Recuperación de Vapores.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Equipos OGI,
                  Camaras Infrarrojas y Sistemas de Recuperación de Vapores.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Camaras
                  Infrarrojas, Deahidratadores y Controladores Neumáticos.
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
              <span className="text-red-400 ">Pregunta 09) </span>Son
              actividades petroleras que no forman parte del Año base del
              Programa para la Prevención y Control Integral de Emisiones de
              Metano (PPCIEM)
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> Producción de
                  gas asociado en pozos de petróleo; Pruebas de pozos de gas no
                  asociado y Producción de gas no asociado en pozos.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Pruebas de
                  pozos de petróleo de gas asociado; Pruebas de pozos de gas no
                  asociado y Terminación de pozos de hidrocarburos.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Pruebas de
                  pozos de petróleo de gas asociado; Producción de gas asociado
                  en pozos de petróleo y Pruebas de pozos de gas no asociado.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Todas las
                  anteriores.
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
              <span className="text-red-400 ">Pregunta 10) </span>Es el plazo
              máximo para llevar a cabo una reparación de una Fuga en Equipos
              y/o Componentes críticos del proceso.
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}
                  />
                  <span className="uppercase font-bold">a)</span> Siguiente paro
                  programado o 6 meses despues de detectada, lo que ocurra
                  primero.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Siguiente paro
                  programado o 15 meses después de detectada, lo que ocurra
                  primero.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Siguiente paro
                  programado o 12 meses después de detectada, lo que ocurra
                  primero.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />                    

                  <span className="font-bold uppercase">d)</span> 15 días
                  naturales.
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
              <span className="text-red-400 ">Pregunta 11) </span>Indique si la
              siguiente aseveración es cierta o falsa:<br></br>
              <br></br>
              “Los Regulados que cuenten con Instalaciones nuevas de los
              Proyectos deberán establecer las acciones tendientes a mantener el
              volumen de emisiones establecido en el diagnóstico para sus
              equipos, incluyendo sus Componentes, así como para las operaciones
              en pozos.<br></br>
              <br></br>
              Los Regulados que incrementen las emisiones de metano
              cuantificadas en el Año base, deberánestablecer e implementar
              acciones de prevención y control en el año calendario subsecuente,
              para reducirlas al nivel determinado en el diagnóstico”.
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta11(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> Cierto.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta11"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta11(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Falso.
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
              <span className="text-red-400 ">Pregunta 12) </span>Indique si la
              siguiente aseveración es cierta o falsa: “Los Terceros Autorizados
              por la ASEA, son las organizaciones independientes encargadas de
              la Elboración, Dictaminación y Gestión del Programa para la
              Prevención y Control Integral de Emisiones de Metano del Sector
              Hidrocarburos (PPCIEM)”
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta12(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> Cierto.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta12"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta12(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Falso.
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
              <span className="text-red-400 ">Pregunta 13) </span>Los Regulados
              deberán efectuar evaluaciones de la implementación del PPCIEM por
              lo menos una vez al año, en las cuales se determinará el avance de
              las metas y acciones contenidas en el mismo. ¿Quién
              especificamente debe realizar dicha evaluación?
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta13(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> El responsable
                  de mantenimiento.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta13"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta13(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> El responsable
                  técnico del PPCIEM.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta13"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta13(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Un equipo
                  multidisciplinario.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta13"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta13(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Un tercero
                  autorizado por la ASEA.
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
              <span className="text-red-400 ">Pregunta 14) </span>Indique cual
              es la periodicidad para elaborar el Reporte de Cumplimiento del
              PPCIEM que se entrega a la ASEA:
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta14(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> Trimestral, en
                  seguimiento del Programa de Detección y Reparación de Fugas.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta14"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta14(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Semestral, en
                  seguimiento del Programa de Detección y Reparación de Fugas.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta14"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta14(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Anual
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta14"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta14(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Cada 5 años.
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
              <span className="text-red-400 ">Pregunta 15) </span>Es informe al
              cual se anexa el Reporte Anual de Cumplimiento del PPCIEM para
              entregarlo a la ASEA.
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
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta15(e.target.value)}

                  />
                  <span className="uppercase font-bold">a)</span> Informe Anual
                  de Cumplimiento del PPCIEM.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta15"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta15(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Informe del
                  Programa de Detección y Reparación de Fugas.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta15"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta15(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Informe de
                  Desempeño en materia de Seguridad Industrial, Seguridad
                  Operativa y Protección al medio ambiente.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta15"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta15(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> Ninguno de los
                  anteriores, el Reporte Anual de Cumplimiento del PPCIEM se
                  presenta de forma independiente.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 15 */}
        {/* FINAL */}
      </form>

      <div className="bg-white my-10 py-10 px-5 shadow-md rounded-md">
      <div className="bg-amber-200 mb-6 mx-2 pt-6 pb-1 shadow-md rounded-md">
      <div className="font-extrabold uppercase text-amber-600 mb-5 text-xs">¡Te recomendamos de la manera mas atenta corroborar que el examen no se encuentre vacio o incompleto! {' '} <span className="text-rose-500 font font-extrabold text-xs" >
          No selecciones esta opcion si no te encuentras completamente seguro.</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex mb-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-rose-300 checked:border-rose-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                value="Habilitar"
                onChange={handleSubmit}
              />
              <div className="ml-2 uppercase">
                He concluido el cuestionario y deseo enviar mis respuestas{" "}
              </div>
            </label>
          </div>
        </div>


        <button
          type="submit"
          className="bg-rose-500 text-white font-bold uppercase p-3 rounded-md mb-10 w-full lg:w-96"
          onClick={() => setMostrarFinal(!mostrarFinal)}
          disabled={!botonActivo}
        >
          {mostrarFinal ? false : "ENVIAR EVALUACION"}
        </button>
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
