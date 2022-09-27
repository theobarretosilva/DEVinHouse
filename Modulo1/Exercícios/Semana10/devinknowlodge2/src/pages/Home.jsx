export const Home = () => {
    return(
        <body>
            <aside className="aside">
                <header>
                    <div className="logoIntro">
                        <img src="assets/imgs/Logo - DEVinKnowledge.png" alt="Logo DEVinKnowledge"/>
                        <div id="divTexto">
                            <h1 id="h1Intro">DEVinKnowledge</h1>
                            <p id="pIntro">Aprenda, interaja e compartilhe<br/>sua experiência com o mundo!</p>
                        </div>
                    </div>
                </header>
                <form id="formulario" className="formDica">
                    <div>
                        <label htmlFor="inputTitulo" className="labelInput">Título</label>
                        <br/>
                        <input id="titulo" className="input" type="text" placeholder="Título da sua dica" minLength="8" maxLength="64" required/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="input" className="labelInput">Linguagem/Skill</label>
                        <br/>
                        <input id="linguagem" type="text" className="input" minLength="2" maxLength="16" placeholder="A linguagem/skill da sua dica" required/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="inputCategoria" className="labelInput">Categoria</label>
                        <br/>
                        <select id="inputCategoria" className="input" required>
                            <option selected disabled value="">Selecione a categoria</option>
                            <option value="FrontEnd">FrontEnd</option>
                            <option value="BackEnd">BackEnd</option>
                            <option value="FullStack">FullStack</option>
                            <option value="Comportamental/Soft">Comportamental/Soft</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="inputText" className="labelInput">Descrição</label>
                        <br/>
                        <textarea id="descricao" className="textArea" minLength="32" maxLength="512" placeholder="Escreva aqui a sua dica" cols="37" rows="9" required></textarea>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="inputUrl" className="labelInput">Vídeo do YouTube</label>
                        <br/>
                        <input id="inputLink" className="input" placeholder="Link do vídeo do YouTube" type="url"/>
                    </div>
                    <br/>
                    <div>
                        <button id="buttonEnviar" className="button" type="submit">Enviar dica</button>
                        <button id="limparForm" type="reset">Limpar dados</button>
                    </div>
                </form>
            </aside>
            <header>
                <header className="navegacao">
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
                    <div className="pesquisaDicas">
                        <input type="text" id="barraPesquisa" placeholder="Pesquise uma dica"/>
                        <button id="pesquisar"><img id="imgPesquisa" src="./assets/imgs/pesquisar.png" alt="Botão para pesquisar"/></button>
                        <button id="limparPesquisa"><img id="imgLimpa" src="./assets/imgs/limpar.png" alt="Botão para limpar a pesquisa"/></button>
                    </div>
                </header>
            </header>
            <main>
                <div id="cardDicas" className="cardDicas">
                    <section className="dica">
                        <h1>Grid vs Flex-Box</h1>
                        <p><strong>Linguagem/Skill: </strong>CSS</p>
                        <p><strong>Categoria: </strong>FrontEnd</p>
                        <p>Lorem ipsum dolor sit amet consectetur<br/>adipisicing elit.brAccusantium,<br/>ipsa excepturi incidunt libero<br/>saepe deserunt illo necessitatibus<br/>voluptatibus omnis tempora!</p>
                        <div className="botoesCard">
                            <button id="deletaDica"><img id="imgDeletaDica" src="./assets/imgs/deletaDica.png" alt="Botão para deletar dica"/></button>
                            <button id="editaDica"><img id="imgEditaDica" src="./assets/imgs/editaDica.png" alt="Botão para editar dica"/></button>
                            <button id="videoDica"><img id="imgVideoDica" src="./assets/imgs/videoDica.png" alt="Botão para ver o vídeo da dica"/></button>
                        </div>
                    </section>
                    <section className="dica">
                        <h1>Grid vs Flex-Box</h1>
                        <p><strong>Linguagem/Skill: </strong>CSS</p>
                        <p><strong>Categoria: </strong>FrontEnd</p>
                        <p>Lorem ipsum dolor sit amet consectetur<br/>adipisicing elit.brAccusantium,<br/>ipsa excepturi incidunt libero<br/>saepe deserunt illo necessitatibus<br/>voluptatibus omnis tempora!</p>
                        <div className="botoesCard">
                            <button id="deletaDica"><img id="imgDeletaDica" src="./assets/imgs/deletaDica.png" alt="Botão para deletar dica"/></button>
                            <button id="editaDica"><img id="imgEditaDica" src="./assets/imgs/editaDica.png" alt="Botão para editar dica"/></button>
                            <button id="videoDica"><img id="imgVideoDica" src="./assets/imgs/videoDica.png" alt="Botão para ver o vídeo da dica"/></button>
                        </div>
                    </section>
                </div>
            </main>
            <div id="modal" className="modal">
                <div id="content" className="content">
                    <img src="assets/imgs/sucesso.png" alt="Símbolo de sucesso"/>
                    <h3>A sua dica foi cadastrada com sucesso!</h3>
                    <button id="buttonOk">Ok!</button>
                </div>
            </div>
            <div id="modalEditando" className="modalEditando">
                <div id="contentEditando" className="contentEditando">
                    <img src="assets/imgs/editando.png" alt="Símbolo de editar"/>
                    <h3>Você está editando a sua dica!</h3>
                    <button id="buttonOkEditando">Ok!</button>
                </div>
            </div>
            <div id="modalCertezaDeletar" className="modalCertezaDeletar">
                <div id="contentCertezaDeletar" className="contentCertezaDeletar">
                    <img src="assets/imgs/deletaDica.png" alt="Símbolo de deletar"/>
                    <h3>Tem certeza que deseja deletar essa dica?</h3>
                    <div>
                        <button id="simCertezaDeletar">Sim</button>
                        <button id="naoCertezaDeletar">Não</button>
                    </div>
                </div>
            </div>
        </body>
    )
}