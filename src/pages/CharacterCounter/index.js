import React, { useState, useEffect } from 'react';
import './style.css';

function CharacterCounter() {
    const [contador, setContador] = useState('')
    const [char, setChar] = useState(0)
    const [word, setWord] = useState(0)
    const [line, setLine] = useState(0)

    useEffect(() => {
        var texto = contador;
        var c = texto.length;

        var fullStr = texto + " ";
        var initial_whitespace_rExp = /^[^\wÀ-ú]+/gi;
        var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
        var non_alphanumerics_rExp = /[^\wÀ-ú']+/gi;
        var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
        var splitString = cleanedStr.split(" ");
        var w = splitString.length - 1;

        var lines = texto.split("\n");
        var l = texto.length ? lines.length : 0;

        setChar(c);
        setWord(w);
        setLine(l);
    }, [contador]);

    return (
        <>
            <h1>Contador de Caracteres</h1>
            <form>
                <div className="content">
                    <div className="box">
                        <textarea name="text" id="text" placeholder="Digite aqui" onChange={(e) => setContador(e.target.value)} />
                    </div>
                    <div className="result">
                        Caracteres:
                        <span id="chars">{char}</span >
                        Palavras:
                        <span id="words">{word}</span>
                        Linhas:
                        <span id="lines">{line}</span>
                    </div >
                </div >
            </form >
        </>
    )
}

export default CharacterCounter;