import React from 'react'

type DataProps = {
    data: string | number 
}

export const RowData = ({data}: DataProps) => {
  return (
    <td className="text-sm capitalize tracking-wide w-full">
        {data}
    </td>
  )
}