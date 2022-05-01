import { useState, useEffect } from "react"
import Error from "./Error"

useState
const Formulario = ({ pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)


  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    
    return fecha + random
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar formulario: que nadie esté vacio
    if ( [ nombre, propietario, email, fecha, sintomas ].includes('') ){
      setError(true)
      return;
    }

    //No hay error
    setError(false)

    //guardo los datos del paciente actual en un Objeto
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId()
    }

    //Agregar Nuevo Objeto de Paciente en mi arreglo de pacientes
    setPacientes([...pacientes, objetoPaciente])

    //Limpiar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5"
      >
        {error && <Error mensaje='Todos los campos son obligatorios' />}

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota: {nombre}
          </label>

          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange = { (e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>

          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange = { (e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            type="email"
            placeholder="Email de contacto del Propietario"
            value={email}
            onChange = { (e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>

          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="alta"
            type="date"
            value={fecha}
            onChange = { (e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
          Sintomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange = { (e) => setSintomas(e.target.value)}
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar Paciente"
        />

      </form>
    </div>
  )
}

export default Formulario