import type { ReactNode } from 'react'

interface ExerciseCardProps {
  number: number
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export function ExerciseCard({
  number,
  eyebrow,
  title,
  description,
  children,
}: ExerciseCardProps) {
  return (
    <article className="exercise-card" id={`ejercicio-${number}`}>
      <div className="exercise-card__header">
        <span className="exercise-number" aria-hidden="true">
          {String(number).padStart(2, '0')}
        </span>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="exercise-description">{description}</p>
        </div>
      </div>
      <div className="exercise-card__body">{children}</div>
    </article>
  )
}
