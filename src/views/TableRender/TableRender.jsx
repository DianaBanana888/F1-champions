import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import WinnersTable from '../WinnerTable/WinnersTable';
import ExternalWidget from '../ExternalWidget';
import { getWorldChampionsStandings } from '../../ergast/fetchRequest';
import './TableRender.css';

export default function GetRequestHooks() {
  const [worldChampions, setWorldChampions] = useState([]);
  const [activeSeason, setActiveSeason] = useState(null);
  const yearDataStart = 1950;
  const yearStart = 2005;
  const expectedOffset = yearStart - yearDataStart;

  let activeWorldChampion = null;
  activeWorldChampion = worldChampions
    .find((standings) => standings.season === activeSeason)
    ?.DriverStandings[0]?.Driver?.driverId;

  useEffect(() => {
    getWorldChampionsStandings(expectedOffset).then((data) => setWorldChampions(data));
  }, [expectedOffset]);

  return (
    <>
      <table className="table winner-seasons-table">
        <WinnersTable
          worldChampions={worldChampions}
          activeSeason={activeSeason}
          setActiveSeason={setActiveSeason}
        />
      </table>

      <table className={
        classNames(
          activeSeason && 'table',
          'winner-races-table',
        )
      }
      >
        <ExternalWidget season={activeSeason} winner={activeWorldChampion} />
      </table>
    </>
  );
}
