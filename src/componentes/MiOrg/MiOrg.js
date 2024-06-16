import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
   

    // const [mostrar, actualizarMostrar] = useState(true)

    // const ManejarClick = () => {
    //     console.log("Mostrar /Ocultar Elemento")
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg

// import { useState } from "react"
// import "./MiOrg.css"

// const MiOrg = ({ onMostrar }) => {
//     const ManejarClick = () => {
//       console.log("Mostrar /Ocultar Elemento");
//       onMostrar();
//     };
  
//     return (
//       <section className="orgSection">
//         <h3 className="title">Mi organización</h3>
//         <img src="/img/add.png" alt="add" onClick={ManejarClick} />
//       </section>
//     );
//   };

// export default MiOrg

