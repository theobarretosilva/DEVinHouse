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
                        { <Card 
                            card = {{
                            img: 'https://www.dicasdemulher.com.br/wp-content/uploads/2021/05/entradas-para-jantar-00.png',
                            descricaoImg: "Bruschetta de tomates confit",
                            nomePrato: "Bruschetta de tomates confit",
                            descricaoPrato: "Bruschetta de tomates confit com manjericões frescos",
                            tempoPreparo: "Tempo de preparo: 15 minutos",
                            preco: "R$ 24,90",
                            }}
                        /> }
                </div>
                <div>
                    <h2 className='nomeSecao'>Saladas</h2>
                </div>
                <div>
                    <h2 className='nomeSecao'>Pratos principais</h2>
                </div>
                <div>
                    <h2 className='nomeSecao'>Sobremesas</h2>
                </div>
                <div>
                    <h2 className='nomeSecao'>Bebidas</h2>
                </div>
            </div>
            <div id='div2'></div>
        </div>
    )
}