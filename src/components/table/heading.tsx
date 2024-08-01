import React from 'react'

type HeaderProps = {
    header: string
}

export const Heading = ({header}: HeaderProps) => {
  return (
    <th className="text-base capitalize font-semibold tracking-wide w-full">
        {header}
    </th>
  )
}