
import React, { useState } from 'react';
import { createHash } from '../../services/hash';
import alertify from 'alertifyjs';
import './css/style.css';
import './css/alertify.css';

function HashForm() {

    const [tipoHash, setTipoHash] = useState('base64');

    const acoesEncode = [{ value: 'base64', label: "BASE64" },
    { value: 'md5', label: "MD5" },
    { value: 'sha1', label: "SHA1" },
    { value: 'sha256', label: "SHA256" }]

    const acoesDecode = [{ value: 'dbase64', label: "BASE64" }]

    const handleSetHash = (value) => {
        let output = document.getElementById('output');
        output.value = createHash(tipoHash, value);
    }

    const handleCopyHash = () => {
        let output = document.getElementById('output');
        output.focus();
        output.select();
        output.setSelectionRange(0, 99999);
        document.execCommand("copy");
        let noticacao = alertify.notify('Hash copiado com sucesso!', 'success', 5);
    }

    const handleLimpaInput = () =>{
        let input = document.getElementById('input');
        let output = document.getElementById('output');
        input.value = '';
        output.value = '';
    }

    return (
        <>
            <h1>Gerador de Hash</h1>
            <span>Selecione uma ação abaixo:</span>
            <div className="dv-main-hash">
                <div className="dv-column-encode">
                    <div id="menu-lateral" className="menu-lateral">
                        <select id="acao" value={tipoHash} onChange={(e) => {setTipoHash(e.target.value); handleLimpaInput();}} className="input-efeito pointer">
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
                    <textarea id="input" placeholder="Input" className="input-efeito tamanho-textearea" onChange={(e) => (handleSetHash(e.target.value) )}></textarea>
                </div>
                <div className="dv-row-input">
                    <button className="button-hash" onClick={handleCopyHash}>Copiar Hash</button>
                </div>
                <div className="dv-row-input">
                    <textarea id="output" placeholder="Output" className="input-efeito tamanho-textearea"></textarea>
                </div>
            </div>
        </>
    )
}

export default HashForm;