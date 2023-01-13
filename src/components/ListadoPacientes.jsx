import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) =>{

  return (
    <div className='md:w-1/2 lg:w-3/5'>

      {pacientes && pacientes.length ? (
      <>
        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
        <p className='text-xl mt-5 mb-7 text-center font-bold'>
          Administra tus {" "}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
        </p>
        <div className="md:h-screen overflow-y-scroll mx-3 ">

          {/* Iteracion sobre el componente de pacientes */}
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              
            />
          ))}
        </div>
        </>) : (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes por ahora</h2>
            <p className='text-xl mt-5 mb-7 text-center font-bold'>
              Comienza agregando pacientes {" "}
            <span className='text-indigo-600 font-bold'>y en este lugar aparecerán</span>
            </p>
          </>
      )}
      
    </div>
    )
}

export default ListadoPacientes