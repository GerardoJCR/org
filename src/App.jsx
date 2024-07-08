import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/Miorg/index';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer';
function App() {


  //Esta en una forma de declarar en react utilizando el hook useState
  //mostrarFormulario es la variable que almacena el estado actual,que en este caso se inicializa en true
  //ActualizarMostrar es una funcion que se utiliza para actualizar el valor de mostrarFormulario

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo:"Devops",
    foto:"https://github.com/GerardoJCR.png",
    nombre:"Gerardo Chevarria",
    puesto:"Ingeniero de Software",
    favorito: true
    
  },
  {
    id: uuid(),
    equipo:"Movil",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Alejandro Herrera",
    puesto:"Desarrollador movil",
    favorito: true
  },
  {
    id: uuid(),
    equipo:"Programacion",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"Marin Rosas",
    puesto:"Instructora",
    favorito: false
  },
  {
    id: uuid(),
    equipo:"Innovacion y Gestion",
    foto:"https://github.com/christianpva.png",
    nombre:"Jose Dario",
    puesto:"Ingeniero industrial",
    favorito: false
  }
    

]) //AQUI ES DONDE SE VAN A ALMACENAR LOS  DATOS DE LOS COLABORADORES
  
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario: "#57C278",
      colorSecundario:"#D9F7E9"
  },
  {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"
  },
  {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:"#F0F8E2"
  },
  {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario:"#FDE7E8"
  },

  {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario:"#FAE9F5"
  },
  {
      id: uuid(),
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario:"#FFF5D9"
  },
  {
      id: uuid(),
      titulo:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario:"#FFEEDF"
  }
  ]
)





  //Esta es una funcion que se encarga de actualizar el estado mostrarFormulario
  //Cuando se llama a esta funcion, se invierte el valor actual de mostrarFormulario utilizando la negacion !
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  } 


  // Registrar colaborador

  const registrarColaborador = (colaborador)=> {
    console.log("Nuevo Colaborador:" , colaborador)
    // setColaboradores(colaborador)

    //Spread  operator
    // Se podria decir que el spread operator nos sirve para clonar un estado anterior y actulizarlo sin mutar la original
    setColaboradores([...colaboradores,colaborador ])

  }

  //Eliminar Colaborador
  const eliminarColaborador= (id)=> {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id  !== id)
    setColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id)=> {
    console.log("Actualizar:", color, id )
    const equiposActualizados = equipos.map((equipo)=> {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }
  

  //favoritos 
  const like = (id)=>{
    console.log("like", id)
    const  colaboradoresActualizados = colaboradores.map( (colaborador)=>{
      if(colaborador.id === id) { //Si es true se convierte en false y si es false se convierte en true
        colaborador.favorito =  !colaborador.favorito
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)

  }

  // Lista de Equipos
  // const equipos = 

  //Ternario condicion ? seMuestra : noseMuestra
  //Condicion && seMuestra

  //Finalmente se renderiza el componente MiOrg y se le pasa la funcion cambiarMostrar como prop enlaceMostrar
  return (
    <div className="App">
      <Header></Header>
      {/* {mostrarFormulario === true ? <Formulario/>: <></>} */}
      {/* este codigo es similar al ternario */}
      {/* //esto es para lista opciones */}
      {mostrarFormulario && <Formulario 
      equipos={equipos.map( (infoequipo)=> infoequipo.titulo)} registrarColaborador={registrarColaborador}  
      crearEquipo={crearEquipo}
      />}
      {/* //en este caso registrarColaborador esta como prop de Formulario y este va props del formulario va a mandar los datos a esta funcion llamada regustrarColaborador */}

      <MiOrg enlaceMostrar={cambiarMostrar}></MiOrg>
      {/* <Equipo equipo="Programación"></Equipo>
      <Equipo equipo="Front End"></Equipo>
      <Equipo equipo="Data Science"></Equipo>
      <Equipo equipo="Devops"></Equipo>
      <Equipo equipo="UX y Diseño"></Equipo> */}
      

        {/* Mostrar Equipos y colaboradores */}
      {equipos.map((informacion)=> <Equipo 
      datosEquipo={informacion}
      key={informacion.titulo} 
      //Estamos usando la propiedad filter porque colaboradores es un array 
      colaboradores = {colaboradores.filter( colaboresEquipo => colaboresEquipo.equipo === informacion.titulo )}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}

      />)}

    <Footer></Footer>        

      
      
      
    </div>
  );
}

export default App;
