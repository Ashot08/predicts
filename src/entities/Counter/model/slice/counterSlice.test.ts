import { counterActions, counterReducer, CounterSchema } from 'entities/Counter';

describe('counterSlice', () => {
  const state: CounterSchema = {
    value: 10,
  }
  test('should decrement', () => {
    expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9} );
  })
  test('should increment', () => {
    expect(counterReducer(state, counterActions.increment())).toEqual({value: 11} );
  })
  test('should work on undefined state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1} );
  })
});
