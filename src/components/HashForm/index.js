
import React, { useState } from 'react';
import { createHash } from '../../services/hash';
import './style.css';

function HashForm() {

    const [tipoHash, setTipoHash] = useState('base64');

    const [inputHash, setInputHash] = useState('');

    const acoesEncode = [{ value: 'base64', label: "BASE64" },
    { value: 'md5', label: "MD5" },
    { value: 'sha1', label: "SHA1" },
    { value: 'sha256', label: "SHA256" }]

    const acoesDecode = [{ value: 'dbase64', label: "BASE64" }]

    return (
        <>
            <h1>Gerador de Hash</h1>
            <span>Selecione uma ação abaixo:</span>
            <div className="dv-main-hash">
                <div className="dv-column-encode">
                    <div id="menu-lateral" className="menu-lateral">
                        <select id="acao" value={tipoHash} onChange={(e) => (setTipoHash(e.target.value))} className="input-efeito">
                            <option key="encode" value="encode" disabled>Encode</option>
                            {acoesEncode.map((acao) =>
                                (<option key={acao.value} value={acao.value}>{acao.label}</option>)
                            )}
                            <option key="decode" value="decode" disabled>Decode</option>
                            {acoesDecode.map((acao) =>
                                (<option key={acao.value} value={acao.value}>{acao.label}</option>)
                            )}
                        </select>
                    </div>
                </div>
                <div className="dv-row-input">
                    <textarea id="input" placeholder="Input" className="input-efeito tamannho-textearea" onChange={(e) => (setInputHash(e.target.value))}></textarea>
                </div>
                <div className="dv-row-input">
                    <button className="button-hash" onClick={() => { document.getElementById('output').value = createHash(tipoHash, inputHash); }}>Gerar</button>
                </div>
                <div className="dv-row-input">
                    <textarea id="output" placeholder="Output" className="input-efeito tamannho-textearea"></textarea>
                </div>
            </div>
        </>
    )
}

export default HashForm;