import React from "react";
import { useState } from "react";
import Final from "./Final";
//para crear el usaurio en la api
import axios from "axios";
import clienteAxios from "../config/axios";
function Residuos() {
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
      const respuesta = await clienteAxios.post("/residuos",{
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
        respuesta10
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
                  placeholder="Ingresa tu nombre completo"
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
{/* PREGUNTA 8 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 01) </span>Son obligaciones que involucran 
              gestiones ante la Agencia de Seguridad,
               Energía y Ambiente, para los generadores de residuos del Sector Hidrocarburos: 
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
                  <span className="uppercase font-bold">a)</span>Manifestación de Impacto Ambiental y Valorización de Residuos. 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Registro de generador de residuos y Registro de Plan de Manejo de Residuos. 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Valorización de Residuos  y Registro de un Programa de Manejo de Residuos.
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta08"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta08(e.target.value)}

                  />
                  <span className="uppercase font-bold">d)</span> Registro de Plan de Manejo de Residuos y Permitir el acceso a los Supervisores de la ASEA. 
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 8 */}
        {/* FINAL */}

        

        {/* PREGUNTA 2 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-0 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 02) </span>Son principios establecidos en la Ley General 
              del Equilibrio Ecológico y la Protección al Ambiente (LGEEPA). 
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
                  <span className="uppercase font-bold">a)</span>Quien realice obras o actividades que afecten o 
                  puedan afectar el ambiente, está obligado a prevenir, 
                  minimizar o reparar los daños que cause, así como a asumir los costos que dicha afectación implique. 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> La responsabilidad del equilibrio ecológico, 
                  comprende tanto las condiciones presentes como las de la calidad de la vida de las futuras generaciones. 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> La prevención de las causas que los generan, 
                  es el medio más eficaz para evitar los desequilibrios ecológicos. 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta02"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta02(e.target.value)}
                  />
                  <span className="font-bold uppercase">d)</span> Todas las anteriores. 
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 2 */}
        {/* FINAL */}


        {/* PREGUNTA 4 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 03) </span>De acuerdo con la NOM-001-ASEA-2019,
               son aquellos residuos generados en los procesos, instalaciones y servicios derivados de la 
               realización de las actividades del Sector Hidrocarburos, que posean alguna de las características de corrosividad,
                reactividad, explosividad, toxicidad, inflamabilidad, o que contengan agentes infecciosos que les confieran peligrosidad, 
                así como envases, recipientes, embalajes y 
              suelos que hayan sido contaminados cuando se transfieran a otro sitio, de conformidad con la legislación aplicable. 
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
                  <span className="uppercase font-bold">a)</span>Residuos Peligrosos 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Residuos Solidos Urbanos 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Residuos Peligrosos del Sector Hidrocarburos 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta04"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta04(e.target.value)}
                  />
                  <span className="font-bold uppercase">d)</span>Residuos de Manejo Especial 
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
            <h1 className="text-gray-700">
              {" "}
              <span className="text-amber-500 font-bold">Pregunta 04) </span><span className=" font-bold">A continuación se muestran los anexos que intengran 
              el Convenio Internacional 
              para Prevenir la Contaminación por los Buques (MARPOL), indique cuales NO han sido ratificados por México. </span>
              <br/>
              <br/>

              <span className="text-gray-600 ">Anexo I.- Reglas para prevenir la contaminación por Hidrocarburos. 
              <br/>
              Anexo II.-Reglas para prevenir la contaminación por Sustancias Nocivas Líquidas Transportadas a Granel. 
              <br/>
              Anexo III.- Reglas para prevenir la contaminación por Sustancias Perjudiciales 
              Transportadas por Mar en Bultos. Se trata de un anexo opcional ya que el 
              transporte de mercancías peligrosas está reglado por el Código Marítimo Internacional de Mercancías Peligrosas. 
              <br/>
              Anexo IV.- Reglas para prevenir la contaminación por las Aguas Sucias de los Buques
              <br/>
              Anexo V.- Reglas para prevenir la contaminación por las Basuras de los Buques. 
              <br/>
              Anexo VI.- Reglas para prevenir la contaminación Atmosférica ocasionada por los Buques. 
              </span>
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
                  <span className="uppercase font-bold">a)</span> Anexos I y V 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Anexos IV y VI 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Anexos IV y V 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta05"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta05(e.target.value)}

                  />
                  <span className="uppercase font-bold">d)</span> Anexos I y IV 
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 5 */}
        {/* FINAL */}
        {/* PREGUNTA 10 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 05) </span>Son modalidades de la Autorización para 
              el manejo de residuos peligrosos para actividades del Sector Hidrocarburos: 
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
                  <span className="uppercase font-bold">a)</span>Inyección Profunda, Incineración, Reciclaje y Reutilización. 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Inyección Profunda, Venteo, Reciclaje y Reutilización 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> 
                           Exportación, Incineración, Reciclaje y Reutilización  
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta10"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta10(e.target.value)}

                  />
                  <span className="uppercase font-bold">d)</span> Inportación, Incineración, Reciclaje y Reutilización 
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 10 */}
        {/* FINAL */}
  {/* PREGUNTA 6 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 06) </span>De acuerdo con la LGPGIR, son las personas física o morales 
              que generen una cantidad igual o mayor a 400 kg y menor a 10 t en peso bruto total de residuos al año o su equivalente. 
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
                  <span className="uppercase font-bold">a)</span>{" "}
                  Micro Generador 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span>{" "}
                  Generador de Residuos 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span>{" "}
                  Pequeño Generador                   </li>
                  <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta06"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta06(e.target.value)}

                  />
                  <span className="uppercase font-bold">d)</span>{" "}
                  Mediano Generador                 </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 6 */}
        {/* FINAL */}

        {/* PREGUNTA 7 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 07) </span>Plazo que tiene la autoridad (ASEA) para emitir prevenciones 
              una vez que ingresamos el trámite de Registro de Plan de Manejo de residuos peligrosos
               para actividades del Sector Hidrocarburos. 
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
                  <span className="uppercase font-bold">a)</span> 5 días hábiles 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> 20 días hábiles 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> 15 días hábiles 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta07"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta07(e.target.value)}

                  />
                  <span className="uppercase font-bold">d)</span> 
                   10 días hábies 
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 7 */}
        {/* FINAL */}
        {/* PREGUNTA 3 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 08) </span>De acuerdo con la NOM-001-ASEA-2019, 
              es el instrumento cuyo objetivo es minimizar la generación y maximizar la Valorización de Residuos Sólidos Urbanos, 
              Residuos de Manejo Especial y Residuos Peligrosos generados en el Sector Hidrocarburos, bajo criterios de eficiencia ambiental, 
              tecnológica, económica y social, diseñado bajo los principios de Responsabilidad Compartida y Manejo Integral, 
              que considera el conjunto de acciones, procedimientos y medios viables. 
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
                  <span className="uppercase font-bold">a)</span>Programa de Manejo y Gestión de Residuos para el Sector Hidrocarburos 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Programa de Gestión Integral de Residuos 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> Plan de Manejo de Residuos para actividades del Sector Hidrocarburos 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta03"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta03(e.target.value)}
                  />
                  <span className="font-bold uppercase">d)</span>Plan Integral de Manejo de Residuos
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 3 */}
        {/* FINAL */}

        
        {/* PREGUNTA 9 */}
        {/* INICIO */}

        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 09) </span>¿En que tiempo debe entregarse a 
              la ASEA el Informe anual de Residuos de Manejo Especial del Sector Hidrocarburos? 
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
                  <span className="uppercase font-bold">a)</span>Dentro de los tres primeros meses posteriores al año de reporte. 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Dentro del primer trimestre del año. 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span> 
                                         Dentro del primer semestre del año. 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta09"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta09(e.target.value)}

                  />
                  <span className="uppercase font-bold">d)</span> En los meses de abril o mayo. 
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 9 */}
        {/* FINAL */}
{/* PREGUNTA 1 */}
        {/* INICIO */}
        <div className="bg-white py-10 px-5 mb-10 shadow-md rounded-2xl">
          <div className="flex justify-center pY-4 mb-10">
            <h1 className="text-gray-700 font-bold">
              {" "}
              <span className="text-amber-500 ">Pregunta 10) </span>Son dos de los 
              principales ordenamientos legales que regulan la Gestión Integral de los residuos en México. 
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
                  <span className="uppercase font-bold">a)</span> Agencia de Seguridad Energía y Ambiente (ASEA) y 
                  Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT) 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="B"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="uppercase font-bold">b)</span> Agencia de Seguridad Energía y Ambiente 
                  (ASEA) y Secretaría de Energía (SENER) 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="C"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="uppercase font-bold">c)</span>Ley General del Equilibrio Ecológico y la Protección al Ambiente (LGEEPA) y
                   Ley General para la Prevención y Gestión Integral de los Residuos (LGPGIR). 
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    name="pregunta01"
                    value="D"
                    type="radio"
                    className="appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-300 checked:border-amber-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    onChange={e =>setRespuesta01(e.target.value)}

                  />
                  <span className="font-bold uppercase">d)</span> 
                    Ley General para la Prevención y Gestión Integral de los Residuos (LGPGIR) y Su Reglamento en Materia de Impacto Ambiental. 
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* PREGUNTA 1 */}
        {/* FINAL */}
        

        {/* PREGUNTA 20*/}
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

export default Residuos;
