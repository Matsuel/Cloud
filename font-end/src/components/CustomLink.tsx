import Link from 'next/link'
import React from 'react'

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

const CustomLink = ({
    className,
    children,
    href,
    ...props
}: CustomLinkProps) => {
    return (
        <Link href={href!} {...props} className='flex items-center gap-2 hover:underline hover:underline-offset-4'>
            {children}
        </Link>
    )
}

export default CustomLink