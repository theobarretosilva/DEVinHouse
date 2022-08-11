import { func } from 'prop-types';
import { Card } from '../Card/Card';
import './Secoes.css'

export const Secoes = () => {
    return(
        <div>
            <div>
                <h2>Entradas</h2>
                <Card 
                    card = {{
                        img: 'https://www.dicasdemulher.com.br/wp-content/uploads/2021/05/entradas-para-jantar-00.png',
                        descricaoImg: "Bruschetta de tomates confit",
                        nomePrato: "Bruschetta de tomates confit",
                        descricaoPrato: "Bruschetta de tomates confit com manjericões frescos",
                        tempoPreparo: "Tempo de preparo: 15 minutos",
                        preco: "R$ 24,90",
                    }}
                />
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
    )
}