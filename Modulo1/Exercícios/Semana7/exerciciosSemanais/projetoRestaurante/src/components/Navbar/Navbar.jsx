import "./Navbar.css"
import logo from "../../assets/imgs/Restheorante - Logo.png"

import PropType from 'prop-types'

export const Navbar = () => {
    return (
        <nav className="navbar">
           <img id="logo" src={logo} alt="Logo do Restheorante" />
           <p id="tituloNav">Res<span className="theo">theo</span>rante</p>
           <a href="" id="linkCardapio"><strong>Cardápio</strong></a>
        </nav >
    )
}