import React from 'react'
import { ButtonProps } from '../../types/propTypes'
import { Container } from './ButtonElements'

const Button = ({ title, type, onClick }: ButtonProps) => {
    return (
        <Container
            type={type}
            onClick={onClick}
        >
            {title}
        </Container>
    )
}

export default Button