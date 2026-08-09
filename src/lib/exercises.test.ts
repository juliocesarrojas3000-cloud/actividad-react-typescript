import { describe, expect, it } from 'vitest'
import {
  alumnos,
  arregloBase,
  calcularAreaCuadrado,
  calcularPromedioCalificaciones,
  convertirTextoAArreglo,
  dividirEntreCinco,
  sumarArreglo,
} from './exercises'

describe('funciones de los ejercicios TypeScript', () => {
  it('calcula el área de un cuadrado', () => {
    expect(calcularAreaCuadrado(6)).toBe(36)
  })

  it('rechaza lados negativos', () => {
    expect(() => calcularAreaCuadrado(-1)).toThrow(RangeError)
  })

  it('suma todos los elementos de un arreglo', () => {
    expect(sumarArreglo([2, 4, 6, 8, 10])).toBe(30)
  })

  it('retorna cero para un arreglo vacío', () => {
    expect(sumarArreglo([])).toBe(0)
  })

  it('crea un arreglo con valores divididos para cinco', () => {
    expect(dividirEntreCinco(arregloBase)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('no modifica el arreglo original al usar map', () => {
    const copia = [...arregloBase]
    dividirEntreCinco(arregloBase)
    expect(arregloBase).toEqual(copia)
  })

  it('calcula el promedio de calificaciones', () => {
    expect(calcularPromedioCalificaciones(alumnos)).toBe(9)
  })

  it('convierte una cadena separada por comas en number[]', () => {
    expect(convertirTextoAArreglo('1, 2, 3')).toEqual([1, 2, 3])
  })
})
