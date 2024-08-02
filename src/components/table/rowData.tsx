import React from 'react'

type DataProps = {
    data: string | number 
}

export const RowData = ({data}: DataProps) => {
  return (
    <td className="flex text-center text-xs capitalize tracking-wide w-full">
        {data}
    </td>
  )
}