import './App.css'
import { Accumulator } from './components/Accumulator'
import { AreaExercise } from './components/AreaExercise'
import { ExerciseCard } from './components/ExerciseCard'
import { MapExercise } from './components/MapExercise'
import { StudentsExercise } from './components/StudentsExercise'
import { SumExercise } from './components/SumExercise'

const exercises = [
  ['01', 'Área'],
  ['02', 'Suma'],
  ['03', 'Map'],
  ['04', 'Alumnos'],
  ['05', 'useState'],
]

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand__mark">TS</span>
          <span>Laboratorio React</span>
        </a>
        <nav aria-label="Ejercicios">
          {exercises.map(([number, label]) => (
            <a href={`#ejercicio-${Number(number)}`} key={number}>
              <span>{number}</span> {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="titulo-principal">
          <div className="hero__content">
            <p className="hero__kicker">Actividad práctica · React JS + TypeScript</p>
            <h1 id="titulo-principal">Cinco ejercicios.<br />Una aplicación funcional.</h1>
            <p className="hero__lead">
              Funciones tipadas, arreglos, objetos y estado interactivo reunidos en una interfaz
              clara, verificable y adaptable.
            </p>
            <a className="button button--hero" href="#ejercicio-1">Explorar soluciones</a>
          </div>
          <div className="hero__summary" aria-label="Resumen del proyecto">
            <div><strong>5</strong><span>ejercicios resueltos</span></div>
            <div><strong>100%</strong><span>TypeScript estricto</span></div>
            <div><strong>10</strong><span>pruebas automatizadas</span></div>
          </div>
        </section>

        <section className="intro-band" aria-label="Tecnologías empleadas">
          <span>React 19</span><span>TypeScript 6</span><span>Vite 8</span><span>Vitest</span>
        </section>

        <div className="exercise-list">
          <ExerciseCard
            number={1}
            eyebrow="Función con parámetros"
            title="Área de un cuadrado"
            description="La función recibe la longitud del lado, valida el dato y retorna el área como número."
          >
            <AreaExercise />
          </ExerciseCard>

          <ExerciseCard
            number={2}
            eyebrow="Arreglos + reduce"
            title="Suma de elementos"
            description="La entrada se convierte en number[] y una función pura acumula todos sus elementos."
          >
            <SumExercise />
          </ExerciseCard>

          <ExerciseCard
            number={3}
            eyebrow="Transformación inmutable"
            title="Valores divididos para cinco"
            description="map crea un arreglo nuevo sin modificar el arreglo original proporcionado por la docente."
          >
            <MapExercise />
          </ExerciseCard>

          <ExerciseCard
            number={4}
            eyebrow="Objetos tipados"
            title="Promedio de calificaciones"
            description="La interfaz Alumno define nombre, edad y calificación; el promedio se calcula de forma reutilizable."
          >
            <StudentsExercise />
          </ExerciseCard>

          <ExerciseCard
            number={5}
            eyebrow="Hook de React"
            title="Acumulador con useState"
            description="El estado inicia en 25 y se actualiza mediante funciones basadas en el valor anterior, en pasos de cinco."
          >
            <Accumulator />
          </ExerciseCard>
        </div>
      </main>

      <footer>
        <p>Proyecto académico · Aplicaciones Móviles I · React JS + TypeScript</p>
        <a href="#inicio">Volver al inicio ↑</a>
      </footer>
    </>
  )
}

export default App
