import React from 'react'

export default function TableHeaders({ headers }) {
  return (
    <tr>
      {headers?.map((header, index) =>
        <th key={`header-${header.length}-${index}`}>{header}</th>
      )}
    </tr>
  )
}
