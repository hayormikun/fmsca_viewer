import React from 'react'

type HeaderProps = {
    header: string
}

export const Heading = ({header}: HeaderProps) => {
  return (
    <h1 className="mt-5 text-center text-2xl capitalize font-semibold tracking-widest w-full">
        {header}
    </h1>
  )
}