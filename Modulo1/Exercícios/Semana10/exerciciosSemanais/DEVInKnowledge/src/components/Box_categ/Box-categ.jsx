import { BarraPesquisa } from '../BarraPesquisa/BarraPesquisa'
import './Box_categ.css'

export const Box_categ = () => {
    return(
        <section className="navegacao">
            <div id="dicasPorCateg">
                <div className="tituloCateg">
                    <h4>Total</h4>
                    <p id="pTotal">38</p>
                </div>
                <div className="tituloCateg">
                    <h4>FrontEnd</h4>
                    <p id="pFrontEnd">12</p>
                </div>
                <div className="tituloCateg">
                    <h4>BackEnd</h4>
                    <p id="pBackEnd">7</p>
                </div>
                <div className="tituloCateg">
                    <h4>FullStack</h4>
                    <p id="pFullStack">5</p>
                </div>
                <div className="tituloCateg">
                    <h4>SoftSkill</h4>
                    <p id="pSoftSkill">14</p>
                </div>
            </div>
            <BarraPesquisa />
        </section>
    )
}