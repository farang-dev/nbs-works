import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        'max-w-6xl mx-auto px-6 md:px-12',
        className,
      )}
    >
      {children}
    </div>
  )
}
