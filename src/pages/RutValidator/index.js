import React, { useState, useEffect } from 'react';
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io';
import './index.css'

function RutValidator() {

  const [rut, setRut] = useState(null)
  const [isValid, setIsValid] = useState(null)
  const [classInput, setClassInput] = useState('input-block')

  useEffect(() => {
    const validateInput = () => {
      if (rut === null || rut.length === 0) { setIsValid(null); return }

      if (rut.length !== 12) {
        setIsValid(false)
      } else {
        setIsValid(true)
        validateRut()
      }
    }

    const validateRut = () => {
      let a = []
      let factor = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      let c = [];
      let obtainedResult = 0;
      let mod;

      for (let i = 0; i < 12; i++) a[i] = parseInt(rut.charAt(i));

      for (let i = 0; i < a.length; i++) {
        c[i] = a[i] * factor[i];
        obtainedResult += c[i];
      };
      mod = obtainedResult % 11
      mod === 0 ? setIsValid(true) : setIsValid(false)
    }

    validateInput()
  }, [rut])

  useEffect(() => {
    if (isValid === true) {
      setClassInput("input-block valid")
    } else
      if (isValid === false) {
        setClassInput("input-block invalid")
      } else {
        setClassInput("input-block")
      }
  }, [isValid])

  const handleRUT = (e) => {
    e.preventDefault();
    setRut(e.target.rut.value)
  }

  return (
    <>
        <h1>Validador de RUT</h1>
        <form id="formRutValidator" onSubmit={handleRUT}>
          <div className="content">
            <div className={classInput}>
              <input
                type='number'
                name="rut"
                id="rut"
                placeholder="Insira um RUT..."
              >
              </input>
              {isValid && <IoMdCheckmarkCircle className="icon-input valid"></IoMdCheckmarkCircle>}
              {isValid === false && <IoMdCloseCircle className="icon-input invalid"></IoMdCloseCircle>}
            </div>
          </div>
          <div className="content-right">
            <button
              type='submit'>
              Validar
            </button>
          </div>
        </form>
    </>
  );
}

export default RutValidator;