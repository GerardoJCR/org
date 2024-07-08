import "./ListaOpciones.css"

const ListaOpciones = (props)=> {

    //Metodo map => arreglo.map ( (equipo, index)=>{ index seria la posicion
    // return <option></option>
        //})
    

    // const equipos = [
    //     "Programacion",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Movil",
    //     "Innovacion y Gestion"
    // ]

    const manejarCambio = (event) =>{
        console.log("Cambio", event.target.value)
        props.actualizarEquipo(event.target.value)

    }

    return <div className="lista-opciones">
        <label htmlFor="">Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>

            {props.equipos.map( (Equipos, index) => <option key={index} value={Equipos} >{Equipos}  
            </option>
            )}
        </select>
    </div>
}   


export default ListaOpciones