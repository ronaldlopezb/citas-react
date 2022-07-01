import { useRef } from 'react'
import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const LS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(LS)
  const [paciente, setPaciente] = useState({})


  useEffect(() => {
    //console.log('Componente listo o cambió pacientes')
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  const eliminarPaciente = id => {
    //console.log('Eliminando paciente', id)
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    //console.log (pacientesActualizados)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
