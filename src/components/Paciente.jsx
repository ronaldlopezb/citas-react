const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {''}
          <span className="font-normal normal-case">Ronald López</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">ronaldlopez@ronaldlopezb.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Alta: {''}
          <span className="font-normal normal-case">12/11/1984</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus dolore esse sequi adipisci consequuntur architecto ab, labore recusandae obcaecati harum porro quia tenetur quidem! Tempore vel iusto corporis ipsum quasi!</span>
        </p>
      </div>
  )
}

export default Paciente