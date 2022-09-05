const ergastApiBaseUrl = 'https://ergast.com/api/f1/';

export const getWorldChampionsStandings = async () => {
  const response = await fetch(`${ergastApiBaseUrl}driverstandings/1.json?limit=99&offset=55`);
  return (await response.json())?.MRData?.StandingsTable?.StandingsLists;
};

export const getSeasonRacesStandings = async (season) => {
  const response = await fetch(`${ergastApiBaseUrl}${season}/results/1.json?limit=50`);
  return (await response.json())?.MRData?.RaceTable?.Races;
};
