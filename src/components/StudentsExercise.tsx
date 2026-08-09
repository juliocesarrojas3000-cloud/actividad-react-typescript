import { alumnos, calcularPromedioCalificaciones } from '../lib/exercises'

const promedio = calcularPromedioCalificaciones(alumnos)

export function StudentsExercise() {
  return (
    <div className="student-layout">
      <div className="table-wrap">
        <table>
          <caption>Datos del arreglo de objetos alumno</caption>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Calificación</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.name}>
                <td>{alumno.name}</td>
                <td>{alumno.edad}</td>
                <td><strong>{alumno.calificacion}/10</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figure className="grade-chart">
        <figcaption>Calificaciones individuales</figcaption>
        <div className="grade-chart__plot">
          {alumnos.map((alumno) => (
            <div className="grade-column" key={alumno.name}>
              <strong>{alumno.calificacion}</strong>
              <span style={{ height: `${alumno.calificacion * 12}px` }} />
              <small>{alumno.name}</small>
            </div>
          ))}
          <div className="average-line" style={{ bottom: `${promedio * 12 + 35}px` }}>
            <span>Promedio: {promedio.toFixed(1)}</span>
          </div>
        </div>
      </figure>
      <div className="average-card" aria-label={`Promedio general ${promedio.toFixed(1)} de 10`}>
        <span>Promedio general</span>
        <strong>{promedio.toFixed(1)}</strong>
        <small>sobre 10 puntos</small>
      </div>
    </div>
  )
}
