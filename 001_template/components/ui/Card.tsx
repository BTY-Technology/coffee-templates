import React from 'react'
import { cn } from '@/utils/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  rotation?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  rotation,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden border border-amber-900/30 bg-amber-950/20',
        hover && 'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl',
        rotation,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('p-6 sm:p-8', className)} {...props}>
      {children}
    </div>
  )
}

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('border-t border-amber-900/30 p-6', className)} {...props}>
      {children}
    </div>
  )
}
