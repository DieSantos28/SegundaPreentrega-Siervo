import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export const Contacto = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current)
        const datForm = new FormData(datosFormulario.current)
        const contacto = Object.fromEntries(datForm)
        console.log(contacto)
        e.target.reset()
        toast.success('🎮 Consulta Enviada', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        navigate("/")
    }
  return (
    <div className="container" style={{marginTop:"20px"}}>
        <form onSubmit={consultarFormulario} ref={datosFormulario}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
            <input required type="text" className="form-control" name="nombre"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input required type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="consulta" className="form-label">Consulta</label>
            <textarea className="form-control" name="consulta" rows={3} defaultValue={""} />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
    
  )
}