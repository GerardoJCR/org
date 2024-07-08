import "./Colaborador.css"
import { AiFillCloseCircle , AiFillHeart, AiOutlineHeart} from "react-icons/ai";



const Colaborador = (props)=>{

    const {nombre, puesto, foto, equipo,favorito, id} = props.datos

    const {colorPrimario,eliminarColaborador, like} = props


    return <div className="colaborador">
        
        <AiFillCloseCircle className="eliminar" onClick={ ()=> eliminarColaborador(id)} />
        <div className="encabezado"  style={{backgroundColor:colorPrimario}} >
            <img src={foto} alt={nombre} />
        </div>
        <div className="informacionColaborador">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {favorito ? <AiFillHeart className="like" color="black" onClick={()=> like(id)} /> : <AiOutlineHeart className="like" onClick={()=> like(id)} />}
            
            
        </div>
    </div>
}

export default Colaborador