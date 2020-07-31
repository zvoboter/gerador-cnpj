import React from 'react';
import './style.css';
import CnpjValidateForm from '../../components/CnpjValidateForm';


export default function ValidateCnpj() {

    return (
        <>
            <h1>Validador de CNPJ</h1>
            <CnpjValidateForm></CnpjValidateForm>
        </>
    )
}