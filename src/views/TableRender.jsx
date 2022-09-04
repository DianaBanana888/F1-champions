import React, { useState, useEffect } from 'react';
import WinnersTable from './WinnersTable.jsx'
import ExternalWidget from './ExternalWidget.jsx'
import { getWorldChampionsStandings } from '../ergast/fetchRequest'

export default function GetRequestHooks() {
  const [worldChampions, setWorldChampions] = useState([]);
  const [activeSeason, setActiveSeason] = useState(null);

  let activeWorldChampion = null;
  activeWorldChampion = worldChampions.find((standings) => standings.season === activeSeason)?.DriverStandings[0]?.Driver?.driverId;

  useEffect(() => {
    getWorldChampionsStandings().then(data => setWorldChampions(data))
  }, []);

  return (
    <>
      <table className="winner-seasons-table">
        <WinnersTable worldChampions={worldChampions} activeSeason={activeSeason} setActiveSeason={setActiveSeason} />
      </table>

      <table className="winner-rounds-table">
        <ExternalWidget season={activeSeason} winner={activeWorldChampion} />
      </table>
    </>
  );
}
