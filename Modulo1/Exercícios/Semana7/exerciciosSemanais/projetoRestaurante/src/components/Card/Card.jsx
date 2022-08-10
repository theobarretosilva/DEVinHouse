import './Card.css'

import PropTypes from 'prop-types'

export const Card = ({card: {img, descricaoImg, nomePrato, descricaoPrato, tempoPreparo, preco}}) => {
    return (
        <div>
            <img src={img} alt={descricaoImg} />
            <h5>{nomePrato}</h5>
            <p>{descricaoPrato}</p>
            <p>{tempoPreparo}</p>
            <p>{preco}</p>
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