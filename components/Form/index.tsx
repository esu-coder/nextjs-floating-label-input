import React from 'react'
import { FormProps } from '../../types/propTypes'
import { FormContainer, FormTitle } from './style'

const Form = ({ children }: FormProps) => {
    return (
        <FormContainer>
            <FormTitle> Login </FormTitle>
            {children}
        </FormContainer>
    )
}

export default Form