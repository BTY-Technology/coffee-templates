import React from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  rotation?: string
  asChild?: boolean
  href?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', rotation, children, asChild, href, ...props }, ref) => {
    const baseStyles = cn(
      'relative w-auto cursor-pointer select-none flex transition-all duration-200 ease-out',
      'focus:outline-none hover:brightness-95 active:brightness-90 font-semibold',
      'items-center justify-center rounded font-sans gap-2'
    )

    const variants = {
      primary: cn(
        'text-primary bg-accent',
        'shadow-[3px_3px_0px_0px_rgba(26,22,20,1)]',
        'hover:shadow-[2px_2px_0px_0px_rgba(26,22,20,1)]',
        'active:shadow-[1px_1px_0px_0px_rgba(26,22,20,1)]',
        rotation
      ),
      secondary: cn(
        'inline-flex items-center border ring-1 transition',
        'ring-amber-900/30 text-white bg-amber-950/40 hover:bg-amber-900/40 border-amber-900/30'
      ),
      ghost: cn(
        'text-neutral-300 hover:text-amber-400 transition font-sans'
      ),
    }

    const sizes = {
      sm: 'text-sm leading-7 pt-2 pr-4 pb-2 pl-4',
      md: 'text-base leading-7 pt-2.5 pr-6 pb-2.5 pl-6',
      lg: 'text-base leading-7 pt-3 pr-8 pb-3 pl-8',
    }

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )

    if (href && asChild) {
      return (
        <a href={href} className={buttonClasses}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
