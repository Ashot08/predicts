import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter Selector', () => {
  test('should return the correct selector', () => {
    const state: StateSchema = {
      counter: {value: 10}
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  })
});
