import React, { useState, useEffect } from 'react';
import WinnersTable from './WinnersTable.jsx'
import ExternalWidget from './ExternalWidget.jsx'

export default function GetRequestHooks() {
  const [worldChampions, setWorldChampions] = useState([]);
  const [activeSeason, setActiveSeason] = useState(null);
  const [winnerActiveSeason, setWinnerActiveSeason] = useState(null);

  useEffect(() => {
    fetch('http://ergast.com/api/f1/driverstandings/1.json?limit=99&offset=55')
      .then(response => response.json())
      .then(data => setWorldChampions(data?.MRData?.StandingsTable?.StandingsLists));
  }, []);

  return (
    <>
      <table className="winner-seasons-table">
        <WinnersTable worldChampions={worldChampions} activeSeason={activeSeason} setActiveSeason={setActiveSeason} setWinnerActiveSeason={setWinnerActiveSeason} />
      </table>

      <table className="winner-rounds-table">
        <ExternalWidget season={activeSeason} winner={winnerActiveSeason} />
      </table>
    </>
  );
}
