import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary'
}

const Button = ({
    variant = 'primary',
    className,
    children,
    ...props
}: ButtonProps) => {

    const variants = {
        primary: 'border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]',
        secondary: 'border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent'
    }

    return (
        <button className={`rounded-full border border-solid transition-colors flex items-center justify-center gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${variants[variant]}`} {...props}>
            {children}
        </button>
    )
}

export default Button