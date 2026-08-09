import { useMemo, useState } from 'react'
import { calcularAreaCuadrado } from '../lib/exercises'

export function AreaExercise() {
  const [lado, setLado] = useState(6)
  const resultado = useMemo(() => calcularAreaCuadrado(lado), [lado])

  return (
    <div className="workbench workbench--two">
      <div className="control-panel">
        <label htmlFor="lado">Longitud del lado</label>
        <div className="input-with-unit">
          <input
            id="lado"
            type="number"
            min="0"
            step="0.5"
            value={lado}
            onChange={(event) => setLado(Math.max(0, Number(event.target.value)))}
          />
          <span>u</span>
        </div>
        <p className="formula">A = lado × lado</p>
      </div>
      <div className="square-result" aria-live="polite">
        <div className="square-visual" aria-hidden="true">
          <span>{lado} u</span>
        </div>
        <p>Área calculada</p>
        <strong>{resultado.toLocaleString('es-EC')} u²</strong>
      </div>
    </div>
  )
}
