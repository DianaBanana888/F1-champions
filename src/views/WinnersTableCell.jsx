import React from 'react';

export default function WinnersTableCell({ props }) {
  const { parameter, value } = props;

  return (
    <td>
      {parameter}: {value}
    </td>
  )
};
