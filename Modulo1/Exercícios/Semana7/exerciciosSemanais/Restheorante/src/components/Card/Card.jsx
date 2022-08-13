import './Card.css'

import PropTypes from 'prop-types'

export const Card = ({card: {img, descricaoImg, nomePrato, descricaoPrato, tempoPreparo, preco}}) => {
    return (
        <div className='card'>
            <img className='img' src={img} alt={descricaoImg} />
            <h5 className='nome'>{nomePrato}</h5>
            <p className='descricao'>{descricaoPrato}</p>
            <p className='tempo'>{tempoPreparo}</p>
            <p className='preco'>{preco}</p>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        img: PropTypes.string.isRequired,
        descricaoImg: PropTypes.string.isRequired,
        nomePrato: PropTypes.string.isRequired,
        descricaoPrato: PropTypes.string.isRequired,
        tempoPreparo: PropTypes.string.isRequired,
        preco: PropTypes.string.isRequired,
    })
}