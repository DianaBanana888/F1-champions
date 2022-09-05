import { getWorldChampionsStandings } from '../ergast/fetchRequest';

it('works with promises', async () => {
  let data = await getWorldChampionsStandings(55);
  expect(data[0].season).toEqual('2005');
});
