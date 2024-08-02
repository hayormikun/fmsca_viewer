import React from 'react'

type HeaderProps = {
    header: string
}

export const Heading = ({header}: HeaderProps) => {
  return (
    <th className="flex text-center text-sm capitalize font-semibold tracking-wide w-full">
        {header}
    </th>
  )
}