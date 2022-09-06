import { getWorldChampionsStandings } from '../../ergast/fetchRequest';

it('async await test for ergast fetch request', async () => {
  const data = await getWorldChampionsStandings(55);
  expect(data[0].season).toEqual('2005');
});
