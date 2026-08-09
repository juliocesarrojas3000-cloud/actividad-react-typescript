# Actividad: ejercicios TypeScript + React JS

Aplicación web que resuelve los cinco ejercicios propuestos en la guía docente:

1. Función para calcular el área de un cuadrado.
2. Función que suma los elementos de un arreglo.
3. Transformación de un arreglo con `map`, dividiendo cada valor para 5.
4. Arreglo de objetos `Alumno` y cálculo del promedio de calificaciones.
5. Acumulador interactivo con `useState`, valor inicial 25 y pasos de 5.

## Tecnologías

- React 19
- TypeScript 6 con configuración estricta
- Vite 8
- Vitest y Testing Library
- ESLint

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abra la dirección que indique Vite, normalmente `http://localhost:5173`.

## Verificación

```bash
npm run lint
npm run test
npm run build
```

## Estructura principal

```text
src/
├── components/       Componentes visuales de cada ejercicio
├── lib/              Funciones puras, datos y pruebas unitarias
├── test/             Configuración de Testing Library
├── App.tsx           Composición general de la interfaz
└── main.tsx          Punto de entrada de React
```

## Resultados esperados

- Área para lado 6: `36 u²`.
- Suma de `[2, 4, 6, 8, 10]`: `30`.
- Arreglo transformado: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.
- Promedio de Viviana, Wendy y Gerson: `9.0/10`.
- Acumulador: `25 → 30 → 25` al pulsar `+5` y `-5`.

## Fuentes académicas y técnicas

- Monteserín Fernández, P. (2022). *Aprender React con 100 ejercicios prácticos*. Marcombo.
- React. (s. f.). *useState*. https://react.dev/reference/react/useState
- Serrano, C. (2020). *TypeScript. Curso práctico*. RA-MA Editorial.
- TypeScript. (s. f.). *More on functions*. https://www.typescriptlang.org/docs/handbook/2/functions.html
- Vite. (s. f.). *Getting started*. https://vite.dev/guide/

## Autoría académica

Nombre del estudiante: **por completar**  
Asignatura: **Aplicaciones Móviles I**  
Periodo académico: **abril-septiembre de 2026**
