import { useState } from 'react'

const PASO = 5

export function Accumulator() {
  const [acumulador, setAcumulador] = useState(25)

  return (
    <div className="accumulator">
      <p className="accumulator__label">Valor actual</p>
      <output aria-live="polite" aria-label={`Valor del acumulador: ${acumulador}`}>
        {acumulador}
      </output>
      <div className="accumulator__buttons">
        <button
          className="button button--secondary"
          type="button"
          onClick={() => setAcumulador((valorAnterior) => valorAnterior - PASO)}
          aria-label="Disminuir acumulador en 5"
        >
          <span aria-hidden="true">−</span> 5
        </button>
        <button
          className="button button--primary"
          type="button"
          onClick={() => setAcumulador((valorAnterior) => valorAnterior + PASO)}
          aria-label="Incrementar acumulador en 5"
        >
          <span aria-hidden="true">+</span> 5
        </button>
      </div>
      <button className="reset-link" type="button" onClick={() => setAcumulador(25)}>
        Restablecer a 25
      </button>
    </div>
  )
}
