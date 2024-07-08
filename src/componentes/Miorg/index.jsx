import { useState } from "react"
import "./Miorg.css"

const MiOrg = (props) => {
    //Estado - hooks  
    //useState()
    // const  [nombreVariable, funcionActualiza] = useState(valorInicial)

    // const [mostrar, actualizarMostrar] = useState(true)
    // //Hemos creado un switch, cuando se haga click en laa imagen, este se va a volver en estado false y si haces otra vez click se colocara en true, asi sucesivamente
    // const manejarClick = ()=> {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    console.log(props)    

    return <div className="org-section">
        <h3>Mi Organización </h3>
        <img src="/img/boton.png" alt="mi organización" onClick={props.enlaceMostrar}/>
     </div>
     
}

export default MiOrg