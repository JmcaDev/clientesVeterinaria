import {useState, useEffect} from "react"

function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>

        <p className=" text-lg mt-5 text-center mb-10">
          Añade pacientes y {" "}
          <span className="text-indigo-600 font-bold">Administrarlos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Mascota</label>

            <input type="text" placeholder="Nombre de la Mascota"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                   id="nombre"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre del Propietario</label>

            <input type="text" placeholder="Nombre de el Propietario"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                   id="propietario"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>

            <input type="email" placeholder="Email Contacto"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                   id="emial"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Fecha de Alta</label>

            <input type="date" placeholder="alta de la Mascota"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                   id="alta"
            />
          </div>

          <div>
            <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas Mascota</label>

            <textarea 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los sintomas"
            />
          </div>

          <input 
            type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        </form>
    </div>
  )
}

export default Formulario