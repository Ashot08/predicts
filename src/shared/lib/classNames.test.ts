import { classNames } from 'shared/lib/classNames';

describe(
  'classNames', () => {
    test('testName', () => {
      expect(classNames('someClassName')).toBe('someClassName');
    });
  }
);
