import React from 'react'

type FilterProps = {
    column: any
}

export const ColumnFilter = ({column}: FilterProps) => {
    const { filterValue, setFilter } = column
    
    return (
      <span>
        Search:{' '}
        <input
          value={filterValue || ''}
          onChange={e => setFilter(e.target.value)}
        />
      </span>
    )
}