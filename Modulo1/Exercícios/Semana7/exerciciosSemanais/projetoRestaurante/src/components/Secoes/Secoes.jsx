import { func } from "prop-types";
import { Card } from "../Card/Card";
import "./Secoes.css";
import secoes from "../../secoes.json";
import PropTypes from 'prop-types'

const secoesPratos = ["Entradas", "Saladas", "Pratos principais", "Sobremesas", "Bebidas"];

export const Secoes = () => {

  return (
    <div className="divGeralSecoes">
      <div className="divSecoes">
        <div id="div1"></div>
        <div className="secoes">
          <div>
            <h2 className="nomeSecao">ENtradas</h2>
          </div>
          <div>
            <h2 className="nomeSecao">Saladas</h2>
          </div>
          <div>
            <h2 className="nomeSecao">Pratos principais</h2>
          </div>
          <div>
            <h2 className="nomeSecao">Sobremesas</h2>
          </div>
          <div>
            <h2 id="nomeSecao">Bebidas</h2>
          </div>
        </div>
        <div id="div2"></div>
      </div>

      <div className="secoesCards">
        {secoes.entradas.map((item, index) => {
          return <Card card={item} key={index} />;
        })}
        {secoes.saladas.map((item, index) => {
          return <Card card={item} key={index} />;
        })}
      </div>
    </div>
  );
};

Secoes.propTypes = {
  card: PropTypes.shape({
    item: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
  })

  // Secoes: PropTypes.shape({
    
  // })
}