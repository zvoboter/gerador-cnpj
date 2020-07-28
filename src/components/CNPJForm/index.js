import React, { useState } from 'react';
import { createCnpj } from '../../services/cnpj';
import { FaClipboard, FaRegClipboard } from 'react-icons/fa';

import './style.css';

function CNPJForm() {
    const [cnpj, setCnpj] = useState('');
    const [recentCnpjs, setRecentCnpjs] = useState([]);

    const handleCNPJ = (e) => {
        e.preventDefault();

        cnpj && setRecentCnpjs([cnpj, ...recentCnpjs]);
        setCnpj(createCnpj());
    }

    const handleCopyCnpj = (cnpjValue, clean) => {
        let input = document.createElement('input');
        input.value = clean ? cnpjValue.replace(/\D/g, '') : cnpjValue;

        document.body.appendChild(input);
        input.focus();
        input.select();
        input.setSelectionRange(0, 99999);

        console.log(input.value)
        document.execCommand("copy");

        input.remove();
    }

    return (
        <form onSubmit={handleCNPJ}>
            <div className="content-left">
                <div className="input-block">
                    <input name="cnpj"
                        id="cnpj"
                        value={cnpj}
                        readOnly={true}
                        placeholder="00.000.000/0001-01"
                        contentEditable="false"
                    />

                    <FaClipboard className="icon-input" onClick={(e) => handleCopyCnpj(cnpj, false)}></FaClipboard>
                    <FaRegClipboard className="icon-input" onClick={(e) => handleCopyCnpj(cnpj, true)}></FaRegClipboard>
                </div>

                {recentCnpjs.length > 0 &&
                    <>
                        <h3>CNPJ's recentes</h3>
                        <div className="recent-list" >
                            <ul>
                                {recentCnpjs.map((cnpjItem) => (
                                    <li key={cnpjItem}>
                                        <div>
                                            <span>{cnpjItem}</span>
                                            <FaClipboard className="icon-input" onClick={() => handleCopyCnpj(cnpjItem, false)} />
                                            <FaRegClipboard className="icon-input" onClick={() => handleCopyCnpj(cnpjItem, true)} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                }
            </div>
            <div className="content-right">
                <button type="submit">Gerar</button>
            </div>
        </form>
    )
}

export default CNPJForm;