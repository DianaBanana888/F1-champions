import React, { useState, useEffect } from 'react'
import './ExternalWidget.css';
import TableHeaders from './TableHeaders.jsx'
import { getSeasonRacesStandings } from '../ergast/fetchRequest'
import classNames from 'classnames'

export default function ExternalWidget({ season, winner }) {
  let [racesPerSeason, setRacesPerSeason] = useState([]);

  useEffect(() => {
    if (season === null) {
      setRacesPerSeason([]);
      return;
    }
    getSeasonRacesStandings(season).then(data => setRacesPerSeason(data))
  }, [season])

  return (racesPerSeason.length > 0) && (
    <tbody>
      <TableHeaders headers={['Round', 'Race Name', 'Winner Name']} />
      {racesPerSeason.map((race) =>
        <tr
          key={`${race?.season}-${race?.round}`}
          className={
            classNames(
              'race',
              winner === race?.Results[0]?.Driver?.driverId
                ? 'winner'
                : null,
            )
          }>
          <td className={'race-round'}>
            {race?.round}
          </td>
          <td className={'race-name'}>
            {race?.raceName}
          </td>
          <td className={'race-driver'}>
            {race?.Results[0]?.Driver?.familyName + ' ' + race?.Results[0]?.Driver?.givenName}
          </td>
        </tr>
      )}
    </tbody>
  )
}
