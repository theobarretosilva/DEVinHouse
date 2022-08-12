import { func } from 'prop-types';
import { Card } from '../Card/Card';
import './Secoes.css'

export const Secoes = () => {
    return(
        <div className='divGeralSecoes'>
            <div id='div1'></div>
            <div className='secoes'>
                <div>
                    <h2 className='nomeSecao'>Entradas</h2>
                </div>
                <div className='linha'></div>
                <div>
                    <h2 className='nomeSecao'>Saladas</h2>
                </div>
                <div className='linha'></div>
                <div>
                    <h2 className='nomeSecao'>Pratos principais</h2>
                </div>
                <div className='linha'></div>
                <div>
                    <h2 className='nomeSecao'>Sobremesas</h2>
                </div>
                <div className='linha'></div>
                <div>
                    <h2 className='nomeSecao'>Bebidas</h2>
                </div>
            </div>
            <div id='div2'></div>
        </div>
    )
}