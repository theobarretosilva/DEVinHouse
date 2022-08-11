import './Rodape.css'

export const Rodape = () => {
    return(
        <footer className="rodape">
            <div className='divGeral'>
                <div className='contato'>
                    <h3 className='titulo'><strong>CONTATO</strong></h3>
                    <p>(48) 3265-4872</p>
                    <p>restheorante@gmail.com</p>
                </div>
                <div className='horario'>
                    <h3 className='titulo'><strong>HORÁRIO DE FUNCIONAMENTO</strong></h3>
                    <p>Segunda à Sábado: 19:00 - 00:00</p>
                    <p>Abrimos aos Feriados!</p>
                    <p>Domingo: Fechado</p>
                </div>
                <div className='redes'>
                    <h3 className='titulo'><strong>REDES SOCIAIS</strong></h3>
                    <img src="src\assets\imgs\logoInstagram.png" alt="Logo do Instagram" />
                    <img src="src\assets\imgs\logoWhatsapp.png" alt="Logo do WhatsApp" />
                </div>
                <p id='copyright'>Copyright &copy; 2022 Restheorante</p>
            </div>
        </footer>
        
    )
}