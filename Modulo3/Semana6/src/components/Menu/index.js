import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { PMenu } from "./Menu.styles";

const Menu = ({ searchBar }) => {

  const {cart} = useContext(CartContext)
  const navigate = useNavigate()

  return (

    <header className="menu">
      <div className="menu-content">
        <Link to={'/'} style={{ textDecoration: 'none' }}><h1>Sushi Lab</h1></Link>

          {searchBar}

          <ul>
            <li onClick={() => navigate('/cart')}>
              <FaCartPlus color="#fff" />
            - {cart.length} items
            </li>
          </ul>
        <Link to={'/orders'} style={{ textDecoration: 'none' }}><PMenu>Pedidos</PMenu></Link>
        <Link to={'/contactUs'} style={{ textDecoration: 'none' }}><PMenu>Fale-conosco</PMenu></Link>
      </div>
    </header>

  );
};

export default Menu;
