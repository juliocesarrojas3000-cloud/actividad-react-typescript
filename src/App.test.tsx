import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('interfaz del proyecto', () => {
  it('presenta los cinco ejercicios', () => {
    render(<App />)
    expect(screen.getAllByRole('article')).toHaveLength(5)
    expect(screen.getByRole('heading', { name: /área de un cuadrado/i })).toBeInTheDocument()
  })

  it('incrementa y disminuye el acumulador en pasos de cinco', async () => {
    const user = userEvent.setup()
    render(<App />)
    const output = screen.getByLabelText(/valor del acumulador/i)
    expect(output).toHaveTextContent('25')
    await user.click(screen.getByRole('button', { name: /incrementar acumulador en 5/i }))
    expect(output).toHaveTextContent('30')
    await user.click(screen.getByRole('button', { name: /disminuir acumulador en 5/i }))
    expect(output).toHaveTextContent('25')
  })
})
