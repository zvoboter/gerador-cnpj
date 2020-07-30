
import React, { useState, useEffect } from 'react';
import { createHash } from '../../services/hash';
import './style.css';

function HashForm() {

    const [tipo_hash, setTpHash] = useState('base64');

    {/*const [acao_hash, setActionHash] = useState('');*/ }
    const [input_hash, setInputHash] = useState('');

    const acoes_encode = [{ value: 'base64', label: "BASE64" },
    { value: 'md5', label: "MD5" },
    { value: 'sha1', label: "SHA1" },
    { value: 'sha256', label: "SHA256" }]

    const acoes_decode = [{ value: 'dbase64', label: "BASE64" }]

    useEffect(() => {

    });

    return (
        <>
            <h1>Gerador de Hash</h1>
            {/*<a href="#" className='item-menu' onClick={() => { setTpHash('sha1'); setActionHash('encode'); }}>SHA1</a>*/}
            <span>Selecione uma ação abaixo:</span>
            <div className="dv-main-hash">
                <div className="dv-column-encode">
                    <div id="menu-lateral" className="menu-lateral">

                        <select id="acao" value={tipo_hash} onChange={(e) => (setTpHash(e.target.value))} className="input-efeito">
                            <option key="encode" value="encode" disabled>Encode</option>
                            {acoes_encode.map((acao) =>
                                (<option key={acao.value} value={acao.value}>{acao.label}</option>)
                            )}
                            <option key="decode" value="decode" disabled>Decode</option>
                            {acoes_decode.map((acao) =>
                                (<option key={acao.value} value={acao.value}>{acao.label}</option>)
                            )}
                        </select>

                    </div>
                </div>

                <div className="dv-row-input">
                    <textarea id="input" placeholder="Input" className="input-efeito tamannho-textearea" onChange={(e) => (setInputHash(e.target.value))}></textarea>
                </div>

                <div className="dv-row-input">
                    <button className="button-hash" onClick={() => { document.getElementById('output').value = createHash(tipo_hash, input_hash); }}>Gerar</button>
                </div>
                <div className="dv-row-input">
                    <textarea id="output" placeholder="Output" className="input-efeito tamannho-textearea"></textarea>
                </div>
            </div>
        </>
    )
}

export default HashForm;