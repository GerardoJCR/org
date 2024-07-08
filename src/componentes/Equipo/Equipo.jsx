import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from 'hex-to-rgba';    


const Equipo = (props)=>{

    //Forma de reutilizar ESTO:
    //props.datos.colorPrimario
    const {colorPrimario, colorSecundario, titulo, id} = props.datosEquipo;
    
    const {colaboradores,eliminarColaborador, actualizarColor, like} = props;

    

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)  , //color de fondo 
    }
    const EstiloTituloBorder = {
        borderColor: colorPrimario //color de de las cartas
    }
//Aqui aplicamos la condicion ternario
//Solo se esta mostrando los que son true, osea los que tiene elementos, y los que no tienes que no se muestren
    return colaboradores.length > 0 &&
    <>


    <section className="container-equipo" style={obj}>
        <input
         type="color" 
         className="input-color"
         value={colorPrimario}
         onChange={(event)=>{
            // console.log(event.target.value)
            actualizarColor(event.target.value, id)
         }}
        />
        <h3 style={EstiloTituloBorder} > {titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((datosColaborador, index)=> <Colaborador datos={datosColaborador} 
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            } 
        </div>
    </section>
    </>
}


export default Equipo