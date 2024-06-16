import { useState } from "react"
import "./Formulario.css"
import Campo from "../CampoTexto/Campo.js"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador,crearEquipo } = props

    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejar envío")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
    }


    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color })
    
          
    }



    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />

            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de  foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                required
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Título"
                placeholder="Ingresar título"
                required={true}
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

            <Campo
                titulo="Colo"
                placeholder="Ingresar el color en Hexadecimal"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registar equipo
            </Boton>
        </form>

    </section>
}
export default Formulario