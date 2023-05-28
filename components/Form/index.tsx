import React from 'react'
import { FormProps } from '../../types/propTypes'
import { FormContainer, FormTitle } from './FormElements'

const Form = ({ children }: FormProps) => {
    return (
        <FormContainer>
            <FormTitle> Login </FormTitle>
            {children}
        </FormContainer>
    )
}

export default Form