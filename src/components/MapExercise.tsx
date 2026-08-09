import { arregloBase, dividirEntreCinco } from '../lib/exercises'

const transformado = dividirEntreCinco(arregloBase)

export function MapExercise() {
  return (
    <div className="workbench workbench--stacked">
      <div className="array-comparison">
        <div>
          <p className="data-label">Arreglo original</p>
          <div className="number-chips" aria-label="Arreglo original">
            {arregloBase.map((valor) => (
              <span key={valor}>{valor}</span>
            ))}
          </div>
        </div>
        <div className="map-arrow" aria-hidden="true">
          <span>map(valor ÷ 5)</span>
          <b>↓</b>
        </div>
        <div>
          <p className="data-label">Nuevo arreglo</p>
          <div className="number-chips number-chips--accent" aria-label="Arreglo transformado">
            {transformado.map((valor) => (
              <span key={valor}>{valor}</span>
            ))}
          </div>
        </div>
      </div>
      <figure className="mini-chart">
        <figcaption>Comparación proporcional de los valores</figcaption>
        <div className="mini-chart__plot">
          {arregloBase.map((valor, index) => (
            <div className="bar-group" key={valor}>
              <div className="bars" aria-label={`${valor} pasa a ${transformado[index]}`}>
                <span className="bar bar--original" style={{ height: `${valor * 2}px` }} />
                <span className="bar bar--mapped" style={{ height: `${transformado[index] * 2}px` }} />
              </div>
              <small>{valor}</small>
            </div>
          ))}
        </div>
        <div className="chart-legend">
          <span><i className="legend-dot legend-dot--original" />Original</span>
          <span><i className="legend-dot legend-dot--mapped" />Dividido para 5</span>
        </div>
      </figure>
    </div>
  )
}
