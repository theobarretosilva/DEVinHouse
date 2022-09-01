import './Form.css'

export const Form = () => {
    return(
        <form id="formulario" className="formDica">
            <div>
                <label for="inputTitulo" className="labelInput">Título</label>
                <br/>
                <input id="titulo" className="input" type="text" placeholder="Título da sua dica" minLength="8" maxLength="64" required />
            </div>
            <br />
            <div>
                <label for="input" className="labelInput">Linguagem/Skill</label>
                <br />
                <input id="linguagem" type="text" className="input" minLength="2" maxLength="16" placeholder="A linguagem/skill da sua dica" required />
            </div>
            <br />
            <div>
                <label for="inputCategoria" className="labelInput">Categoria</label>
                <br />
                <select id="inputCategoria" className="input" required>
                    <option selected disabled value="">Selecione a categoria</option>
                    <option value="FrontEnd">FrontEnd</option>
                    <option value="BackEnd">BackEnd</option>
                    <option value="FullStack">FullStack</option>
                    <option value="Comportamental/Soft">Comportamental/Soft</option>
                </select>
            </div>
            <br />
            <div>
                <label for="inputText" className="labelInput">Descrição</label>
                <br />
                <textarea id="descricao" className="textArea" minLength="32" maxLength="512" placeholder="Escreva aqui a sua dica" cols="37" rows="9" required></textarea>
            </div>
            <br />
            <div>
                <label for="inputUrl" className="labelInput">Vídeo do YouTube</label>
                <br />
                <input id="inputLink" className="input" placeholder="Link do vídeo do YouTube" type="url" />
            </div>
            <br />
            <div>
                <button id="buttonEnviar" className="button" type="submit">Enviar dica</button>
                <button id="limparForm" type="reset">Limpar dados</button>
            </div>
        </form>
    )
}