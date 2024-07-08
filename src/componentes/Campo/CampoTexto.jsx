import "./Campo.css"

const Campo = (props) => {
    //Destructuración
    const {type = "text"} = props
    // console.log(props.type)

    //Recibir el valor    
    // event.target.value  -> nos permite obtener el valor actual del input en tiempo real
    const manejarCambio = (event)=> {
        // console.log("Cambio", event.target.value)
        props.actualizarValor(event.target.value)
    }

    const placeholderModificado = `${props.placeholder}...`
    
    
    return <div className={`campo campo-${type}`}>
        <label >{props.titulo}</label>
        <input  
            placeholder= {placeholderModificado}
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
            
         />
    </div>
}
export default Campo