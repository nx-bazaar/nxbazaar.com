import Link from 'next/link'
import React from 'react'

export default function Menu() {
    return (
        <div className='flex justify-end'>
            <nav className='flex gap-3 w-full'>
                <Link href='./signin' className='header-button'>
                <UserIcon className='h-8 w-8'/>
                </Link>

            </nav>
            
        </div>
    )
}



