import { useMemo, useState } from 'react'
import { convertirTextoAArreglo, sumarArreglo } from '../lib/exercises'

export function SumExercise() {
  const [entrada, setEntrada] = useState('2, 4, 6, 8, 10')
  const calculo = useMemo(() => {
    try {
      const valores = convertirTextoAArreglo(entrada)
      return { valores, suma: sumarArreglo(valores), error: '' }
    } catch (error) {
      return {
        valores: [],
        suma: 0,
        error: error instanceof Error ? error.message : 'Entrada no válida.',
      }
    }
  }, [entrada])

  return (
    <div className="workbench workbench--stacked">
      <div className="control-panel">
        <label htmlFor="arreglo-suma">Números separados por comas</label>
        <input
          id="arreglo-suma"
          type="text"
          value={entrada}
          onChange={(event) => setEntrada(event.target.value)}
          aria-describedby="suma-ayuda suma-error"
        />
        <small id="suma-ayuda">Ejemplo: 2, 4, 6, 8, 10</small>
        {calculo.error && (
          <p className="error-message" id="suma-error" role="alert">
            {calculo.error}
          </p>
        )}
      </div>
      <div className="result-strip" aria-live="polite">
        <div>
          <span>Elementos válidos</span>
          <strong>{calculo.valores.length}</strong>
        </div>
        <div>
          <span>Operación</span>
          <strong>{calculo.valores.join(' + ') || '—'}</strong>
        </div>
        <div className="result-strip__highlight">
          <span>Suma total</span>
          <strong>{calculo.error ? '—' : calculo.suma}</strong>
        </div>
      </div>
    </div>
  )
}
