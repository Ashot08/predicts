import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue Selector', () => {
  test('should return the correct selector', () => {
    const state: StateSchema = {
      counter: {value: 10}
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10 );
  })
});
