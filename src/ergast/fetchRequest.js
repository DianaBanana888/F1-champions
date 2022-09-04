export const getWorldChampionsStandings = async () => {
  let response = await fetch('http://ergast.com/api/f1/driverstandings/1.json?limit=99&offset=55')
  return (await response.json())?.MRData?.StandingsTable?.StandingsLists
}

export const getSeasonStandings = async (season) => {
  let response = await fetch(`https://ergast.com/api/f1/${season}/results/1.json?limit=50`)
  return (await response.json())?.MRData?.RaceTable?.Races;
}

