import React, { useState, useEffect } from 'react';
import { FaClipboard } from 'react-icons/fa';
import './index.css'

function RutGenerator() {

  const [rut, setRut] = useState(0)
  const [recentList, setRecentList] = useState([])
  const [recursive, setRecursive] = useState([])

  useEffect(() => {
    generateRUT(false)
    // eslint-disable-next-line
  }, [recursive])

  const handleRUT = (e) => {
    e.preventDefault();
    generateRUT(false)
  }

  const handleCopyRut = (rut) => {
    let input = document.createElement('input');
    input.value = rut;

    document.body.appendChild(input);
    input.focus();
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");

    input.remove();
  }

  const generateRUT = (isOnLoad) => {

    let rndArray = new Uint32Array(2);

    while (true) {
      window.crypto.getRandomValues(rndArray);
      var rndNumStr = (rndArray[0] * rndArray[1]).toString().substr(0, 11);
      if (parseInt(rndNumStr.substr(2, 6)) > 0 && parseInt(rndNumStr.substr(0, 2)) > 0 && parseInt(rndNumStr.substr(0, 2)) < 22) break;
    }

    let a = [];
    let i;

    for (i = 0; i < 11; i++) a[i] = parseInt(rndNumStr.charAt(i));

    a[8] = 0;
    a[9] = 0;

    let factor = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let c = [];
    let obtainedResult = 0;

    for (i = 0; i < a.length; i++) {
      c[i] = a[i] * factor[i];
      obtainedResult += c[i];
    };

    let modEleven = obtainedResult % 11;
    let checkDigit = 11 - modEleven;
    let number = 0;
    let exponent;

    if (checkDigit < 10) {
      number = checkDigit;
      exponent = 11;
      for (i = 0; i < a.length - 1; i++) {
        number += a[i] * Math.pow(10, exponent);
        exponent -= 1;
      };
      number += a[a.length - 1] * 10;
    };

    if (checkDigit === 11) {
      exponent = 11;
      for (i = 0; i < a.length - 1; i++) {
        number += a[i] * Math.pow(10, exponent);
        exponent -= 1;
      };
      number += a[a.length - 1] * 10;
    };

    console.log(checkDigit)

    if (checkDigit === 10) {
      setRecursive(a)
      return
    };

    if (!isOnLoad && rut !== 0) {
      setRecentList(recentList => [rut, ...recentList])
    }

    setRut(number.toString())
  }

  return (
    <>
      <h1>Gerador de RUT</h1>
      <form id="formRutGenerator" onSubmit={handleRUT}>
        <div className="content-left">
          <div className="input-block">
            <input
              type='text'
              name="rut"
              id="rut"
              value={rut}
              contentEditable="false"
              readOnly={true}
            >
            </input>
            <FaClipboard className="icon-input" value={rut} onClick={(e) => handleCopyRut(rut)}></FaClipboard>
          </div>

          {recentList.length > 0 &&
            <>
              <h3>RUT's recentes</h3>
              <div className="recent-list" >
                <ul>
                  {recentList.map((rut) => (
                    <li key={rut}>
                      <div>
                        <span>{rut}</span>
                        <FaClipboard className="icon-input" onClick={(e) => handleCopyRut(rut)}></FaClipboard>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        </div>
        <div className="content-right">
          <button
            type='submit'>

            Gerar
            </button>
        </div>
      </form>
    </>
  );
}

export default RutGenerator;
