import "./Navbar.css"
import logo from "../../assets/imgs/Restheorante - Logo.png"

import PropType from 'prop-types'

export const Navbar = () => {
    return (
        <nva>
           <img src={logo} alt="Logo do Restheorante" />
           <p>Restheorante</p>
           <a>Cardápio</a>
        </nva >
    )
    
}