import React, { useEffect, useState } from 'react';
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io';
import { validateCnpj } from '../../services/cnpj';

import './style.css';

export default function CnpjValidateForm() {
    const [cnpjValidate, setCnpjValidate] = useState('');
    const [cnpjValid, setCnpjValid] = useState();
    const [classInput, setClassInput] = useState('input-block')

    useEffect(() => {
        if (cnpjValid === true) {
            setClassInput("input-block valid")
        } else if (cnpjValid === false) {
            setClassInput("input-block invalid")
        }
    }, [cnpjValid])

    const handleValidateCnpj = (e) => {
        e.preventDefault();

        setCnpjValid(validateCnpj(cnpjValidate));
    }

    return (
        <form id="CnpjValidate" onSubmit={handleValidateCnpj}>
            <div className="content">
                <div className={classInput} style={{ flex: 8 }}>
                    <input
                        name="cnpjValidate"
                        id="cnpjValidate"
                        value={cnpjValidate}
                        onChange={(e) => setCnpjValidate(e.target.value)}
                        placeholder="00.000.000/0001-01"
                    />
                    {cnpjValid && <IoMdCheckmarkCircle className="icon-input valid"></IoMdCheckmarkCircle>}
                    {cnpjValid === false && <IoMdCloseCircle className="icon-input invalid"></IoMdCloseCircle>}
                </div>
                <button type="submit" style={{ flex: 2 }}>Validar</button>
            </div>
        </form >
    )
}