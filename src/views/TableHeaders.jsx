import React from 'react';

export default function TableHeaders({ headers }) {
  return (
    <tr className="header">
      {/* Assuming here that headers is a stable array, so it should be ok to use index as key */}
      {/* eslint-disable-next-line react/no-array-index-key */}
      {headers?.map((header, index) => <th key={`header-${header.length}-${index}`}>{header}</th>)}
    </tr>
  );
}
