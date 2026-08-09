export interface Alumno {
  name: string
  edad: number
  calificacion: number
}

export const arregloBase = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

export const alumnos: Alumno[] = [
  { name: 'Viviana', edad: 19, calificacion: 10 },
  { name: 'Wendy', edad: 20, calificacion: 8 },
  { name: 'Gerson', edad: 18, calificacion: 9 },
]

export function calcularAreaCuadrado(lado: number): number {
  if (!Number.isFinite(lado) || lado < 0) {
    throw new RangeError('El lado debe ser un número mayor o igual a cero.')
  }
  return lado * lado
}

export function sumarArreglo(valores: number[]): number {
  if (valores.some((valor) => !Number.isFinite(valor))) {
    throw new TypeError('Todos los elementos deben ser números finitos.')
  }
  return valores.reduce((acumulado, valor) => acumulado + valor, 0)
}

export function dividirEntreCinco(valores: number[]): number[] {
  if (valores.some((valor) => !Number.isFinite(valor))) {
    throw new TypeError('Todos los elementos deben ser números finitos.')
  }
  return valores.map((valor) => valor / 5)
}

export function calcularPromedioCalificaciones(lista: Alumno[]): number {
  if (lista.length === 0) return 0
  return sumarArreglo(lista.map((alumno) => alumno.calificacion)) / lista.length
}

export function convertirTextoAArreglo(texto: string): number[] {
  if (!texto.trim()) return []
  const valores = texto.split(',').map((valor) => Number(valor.trim()))
  if (valores.some((valor) => !Number.isFinite(valor))) {
    throw new TypeError('Use únicamente números separados por comas.')
  }
  return valores
}
