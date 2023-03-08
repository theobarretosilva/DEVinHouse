import { DivGeralStyled, QtdPedidoStyled, ValorPedidoStyled } from "./ItensPedido.styles"
import React from "react"
import PropTypes from 'prop-types';

export const ItensPedido = ({ qtdItem, nomeItem, precoItem }) => {
    return(
        <DivGeralStyled>
            <QtdPedidoStyled>{qtdItem}x {nomeItem}</QtdPedidoStyled>
            <ValorPedidoStyled>R$ {precoItem}</ValorPedidoStyled>
        </DivGeralStyled>
    )
}

ItensPedido.propTypes = {
    qtdItem: PropTypes.string.isRequired,
    nomeItem: PropTypes.string.isRequired,
    precoItem: PropTypes.string.isRequired,
};