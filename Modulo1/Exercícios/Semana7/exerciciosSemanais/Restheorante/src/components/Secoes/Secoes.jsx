import { func } from "prop-types";
import { Card } from "../Card/Card";
import "./Secoes.css";
import secoes from "../../secoes.json";
import PropTypes from 'prop-types'

export const Secoes = ({entradas, saladas, pratosPrincipais, sobremesas, bebidas}) => {

  return (
    <div className="divGeralSecoes">
      <div className="divSecoes">
        <div id="div1"></div>
        <div className="secoes">
          <div>
            <a href=""><h2 className="nomeSecao">{entradas}</h2></a>
          </div>
          <div>
            <a href=""><h2 className="nomeSecao">{saladas}</h2></a>
          </div>
          <div>
            <a href=""><h2 className="nomeSecao">{pratosPrincipais}</h2></a>
          </div>
          <div>
            <a href=""><h2 className="nomeSecao">{sobremesas}</h2></a>
          </div>
          <div>
            <a href=""><h2 id="nomeSecao">{bebidas}</h2></a>
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
        {secoes.pratosPrincipais.map((item, index) => {
          return <Card card={item} key={index} />;
        })}
        {secoes.sobremesas.map((item, index) => {
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
  }),

  secoes: PropTypes.shape({
    entradas: PropTypes.string.isRequired,
    saladas: PropTypes.string.isRequired,
    pratosPrincipais: PropTypes.string.isRequired,
    sobremesas: PropTypes.string.isRequired,
    bebidas: PropTypes.string.isRequired
  })
}