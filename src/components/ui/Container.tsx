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
        'max-w-7xl mx-auto px-6 sm:px-8 lg:px-12',
        className,
      )}
    >
      {children}
    </div>
  )
}
