import React, { useState, useEffect } from 'react';
import './ExternalWidget.css';
import classNames from 'classnames';
import TableHeaders from './TableHeaders';
import { getSeasonRacesStandings } from '../ergast/fetchRequest';

export default function ExternalWidget({ season, winner }) {
  const [racesPerSeason, setRacesPerSeason] = useState([]);

  useEffect(() => {
    if (season === null) {
      setRacesPerSeason([]);
      return;
    }
    getSeasonRacesStandings(season).then((data) => setRacesPerSeason(data));
  }, [season]);

  return (racesPerSeason.length > 0) && (
    <tbody>
      <TableHeaders headers={['Round', 'Race Name', 'Winner Name']} />
      {racesPerSeason.map((race) => (
        <tr
          key={`${race?.season}-${race?.round}`}
          className={
            classNames(
              'race',
              winner === race?.Results[0]?.Driver?.driverId
                ? 'winner'
                : null,
            )
          }
        >
          <td className="race-round">
            {race?.round}
          </td>
          <td className="race-name">
            {race?.raceName}
          </td>
          <td className="race-driver">
            {`${race?.Results[0]?.Driver?.familyName} ${race?.Results[0]?.Driver?.givenName}`}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
