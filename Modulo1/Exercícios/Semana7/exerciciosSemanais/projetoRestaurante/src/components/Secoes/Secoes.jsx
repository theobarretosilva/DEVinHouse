import { func } from 'prop-types';
import { Card } from '../Card/Card';
import './Secoes.css'

export const Secoes = () => {
    return(
        <div>
            <div id='div1'></div>
            <div>
                <div>
                    <h2>Entradas</h2>
                </div>
                <div>
                    <h2>Saladas</h2>
                </div>
                <div>
                    <h2>Pratos principais</h2>
                </div>
                <div>
                    <h2>Sobremesas</h2>
                </div>
                <div>
                    <h2>Bebidas</h2>
                </div>
            </div>
            <div id='div2'></div>
        </div>
    )
}