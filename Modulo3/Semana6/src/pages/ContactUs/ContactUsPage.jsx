import React from "react"
import { ImgAsideStyled, H1Styled, AsideStyled, InputStyled, TextAreaStyled, ButtonStyled } from "./ContactusPage.styles"
import Menu from "../../components/Menu";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api";

export const ContactUsPage = () => {

    const validationSchema = yup.object({
        nome: yup.string().required(),
        email: yup.string().email().required(),
        telefone: yup.string().required(),
        help: yup.string().required(),
    })

    const {register, handleSubmit} = useForm({resolver: yupResolver(validationSchema)})

    const onSubmit = ({ nome, email, telefone, help }) => {
        api.post('/contactUs', {
            name: nome,
            email: email,
            phone: telefone,
            message: help,
        }).then((response) => {
            if(response.status = 201){
                alert('Mensagem enviada com sucesso!')
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <Menu />
            <ImgAsideStyled 
                src="https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzaGl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Hashi molhando sushi no shoyu"
            />
            <AsideStyled>
                <H1Styled>Fale-conosco</H1Styled>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputStyled
                        placeholder={"Seu nome"}
                        type={'text'}
                        data-testid="name"
                        {...register('nome')}
                        required 
                    />
                    <InputStyled
                        placeholder={"Seu email"}
                        type={'email'}
                        data-testid="email"
                        {...register('email')}
                        required
                    />
                    <InputStyled
                        placeholder={"Seu telefone"}
                        type={'tel'}
                        data-testid="tel"
                        {...register('telefone')}
                        required
                    />
                    <TextAreaStyled
                        placeholder={"Como podemos te ajudar?"}
                        wrap={'off'}
                        data-testid="help"
                        {...register('help')}
                        required
                    />
                    <ButtonStyled>Enviar!</ButtonStyled>
                </form>
            </AsideStyled>
        </>
        
    )
}