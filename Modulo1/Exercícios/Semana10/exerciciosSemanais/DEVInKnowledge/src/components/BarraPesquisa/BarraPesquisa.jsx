import './BarraPesquisa.css'

export const BarraPesquisa = () => {
    <div className="pesquisaDicas">
        <input type="text" id="barraPesquisa" placeholder="Pesquise uma dica" />
        <button id="pesquisar"><img id="imgPesquisa" src="../../src/assets/imgs/pesquisar.png" alt="Botão para pesquisar" /></button>
        <button id="limparPesquisa"><img id="imgLimpa" src="../../src/assets/imgs/limpar.png" alt="Botão para limpar a pesquisa" /></button>
    </div>
}