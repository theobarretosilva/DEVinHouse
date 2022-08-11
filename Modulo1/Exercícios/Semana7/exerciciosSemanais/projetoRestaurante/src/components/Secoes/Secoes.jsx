import './Secoes.css'

export const Secoes = () => {
    <div className="container">
        <div className="navigation">
            <div className="menu-toggle">
                <ul className="list">
                    <li className="list-item active">
                        <a href='#'>
                            <span className='icon'>
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className='text'>Home</span>
                        </a>
                    </li>
                    <li className='list-item'>
                        <a href="#">
                            <span className='icon'>
                                <ion-icon name="alert-outline"></ion-icon>
                            </span>
                            <span className='text'>About</span>
                        </a>

                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
}