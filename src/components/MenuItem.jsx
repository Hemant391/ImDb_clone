import Link from 'next/link'
import React from 'react'

export default function MenuItem({title,address,Icon}) {
  return (
   <Link href={address} className='hover:text-amber-200'>
    <Icon className="text-2xl sm:hidden" />
    <p className='uppercase hidden sm:inline-block text-sm'>{title}</p>
   </Link>
  )
}
