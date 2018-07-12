import moviesData from './index';

describe('moviesData', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = moviesData(undefined, {});

    expect(result).toEqual(expected);
  })
});