import './Rodape.css'

export const Rodape = () => {
    return(
        <footer className="rodape">
            <div className='divGeral'>
                <div className='divGeral2'>
                    <div className='contato'>
                        <h3 className='titulo'><strong>CONTATO</strong></h3>
                        <p className='info'>(48) 3265-4872</p>
                        <p className='info'>restheorante@gmail.com</p>
                    </div>
                    <div className='endereco'>
                        <h3 className='titulo'><strong>ENDEREÇO</strong></h3>
                        <p className='info'>Rua Maurício Ribeiro, 840 Beiramar</p>
                        <p className='info'>Rio de Janeiro - RJ</p>
                        <p className='info'>20081-865</p>
                    </div>
                    <div className='horario'>
                        <h3 className='titulo'><strong>HORÁRIO DE FUNCIONAMENTO</strong></h3>
                        <p className='info'>Segunda à Sábado: 19:00 - 00:00</p>
                        <p className='info'>Abrimos aos Feriados!</p>
                        <p className='info'>Domingo: Fechado</p>
                    </div>
                    <div className='redes'>
                        <h3 className='titulo'><strong>REDES SOCIAIS</strong></h3>
                        <div className='icons'>
                            <img src="src\assets\imgs\logoInstagram.png" alt="Logo do Instagram" />
                            <img src="src\assets\imgs\logoWhatsapp.png" alt="Logo do WhatsApp" />
                        </div>
                    </div>
                </div>
                <div className='divCopy'>
                    <p id='copyright'>Copyright &copy; 2022 Restheorante</p>
                </div>
            </div>
        </footer>
        
    )
}