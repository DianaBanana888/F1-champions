import React, { useState } from 'react'
import WinnersTableCell from './WinnersTableCell.jsx'
import TableHeaders from './TableHeaders.jsx'

export default function WinnersTable({ worldChampions, activeSeason, setActiveSeason, setWinnerActiveSeason }) {

  function handleClick(selectedSeason, winnerSelectedSeason) {
    if (activeSeason === selectedSeason) {
      setActiveSeason(null)
      setWinnerActiveSeason(null)
    } else {
      setActiveSeason(selectedSeason)
      setWinnerActiveSeason(winnerSelectedSeason)
    }
  };

  return (
    <tbody>
      <TableHeaders headers={['Season', 'World Champion']} />
      {worldChampions?.map((winner) =>
        <tr
          key={winner?.season}
          onClick={() => handleClick(winner?.season, winner?.DriverStandings[0]?.Driver?.driverId)}
        >
          <WinnersTableCell props={{ parameter: 'season', value: winner?.season }} />
          <WinnersTableCell props={{ parameter: 'winner', value: winner?.DriverStandings[0]?.Driver?.familyName + ' ' + winner?.DriverStandings[0]?.Driver?.givenName }} />
        </tr>
      )
      }
    </tbody>
  )
}

