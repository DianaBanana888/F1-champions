import React from 'react'
import WinnersTableCell from './WinnersTableCell.jsx'
import TableHeaders from './TableHeaders.jsx'

export default function WinnersTable({ worldChampions, activeSeason, setActiveSeason }) {

  function handleClick(selectedSeason) {
    if (activeSeason === selectedSeason) {
      setActiveSeason(null)
    } else {
      setActiveSeason(selectedSeason)
    }
  };

  return (
    <tbody>
      <TableHeaders headers={['Season', 'World Champion']} />
      {worldChampions?.map((winner) =>
        <tr
          key={winner?.season}
          onClick={() => handleClick(winner?.season)}
          className={(activeSeason && activeSeason === winner.season) ? 'selected' : null}
        >
          <WinnersTableCell props={winner?.season} />
          <WinnersTableCell props={winner?.DriverStandings[0]?.Driver?.familyName + ' ' + winner?.DriverStandings[0]?.Driver?.givenName} />
        </tr>
      )
      }
    </tbody>
  )
}
