import React, { useState } from 'react';
import { createCnpj } from '../../services/cnpj';
import './style.css';

function Main() {
    const [cnpj, setCnpj] = useState('');

    const handleCNPJ = (e) => {
        e.preventDefault();

        setCnpj(createCnpj());
    }

    return (
        <>
            <h1>Gerador de CNPJ</h1>
            <form onSubmit={handleCNPJ}>
                <div className="content-left">
                    <div className="input-block">
                        <input name="cnpj"
                            id="cnpj"
                            value={cnpj}
                            readOnly={true}
                            placeholder="00.000.000/0001-01"
                            contentEditable="false" />
                    </div>

                    <div className="recent-list">
                        <ul>
                            <li>{'00.000.000/0001-01'}</li>
                        </ul>
                    </div>
                </div>
                <div className="content-right">
                    <button type="submit">Gerar</button>
                </div>
            </form>
        </>
    )
};

export default Main;