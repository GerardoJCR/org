import { useState } from "react"

import "./Formulario.css"
import Campo from "../Campo/CampoTexto.jsx"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton"

const Formulario= (props)=> {


    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    
    const [titulo,setTitulo] = useState("")
    const [color, setColor] = useState("")

    //reutilizacion
    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault() //Para que no se actualice el  formulario
        console.log("Manejar el envio", event)
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo
        }
        // console.log(datosAEnviar)
        // props.registrarColaborador(datosAEnviar)
        registrarColaborador(datosAEnviar)
        
    }


    const HandleEquipo = (event)=> {
        event.preventDefault() //Para que no se actualice el formulario
        
        crearEquipo({titulo,colorPrimario:color})

    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo titulo="Nombre"
            placeholder="Ingresar Nombre"
            required 
            valor={nombre}
            actualizarValor={setNombre}
            />
            <Campo titulo="Puesto" 
            placeholder="Ingresar Puesto" 
            required
            valor={puesto}
            actualizarValor={setPuesto}
            />
            <Campo titulo="Foto" 
            placeholder="Ingresar enlace de la foto" 
            required
            valor={foto}
            actualizarValor={setFoto}
            />
            {/* ListaOpciones -> Modificacion con props */}
            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos} // reutilizacion
            />


            
            <Boton>
                Crear Colaborador
            </Boton>
        </form>
        <form onSubmit={HandleEquipo} >
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo titulo="Titulo"
            placeholder="Ingresar titulo"
            required 
            valor={titulo}
            actualizarValor={setTitulo}
            />
            <Campo titulo="Color" 
            placeholder="Ingresar el color en Hex." 
            required
            valor={color}
            actualizarValor={setColor}
            type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario