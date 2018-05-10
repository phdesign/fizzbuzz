import test from 'ava';
import { fizzBuzz } from './fizzbuzz';

test('should return an iterator with at least one value', t => {
  const fb = fizzBuzz();
  t.false(fb.next().done);
});

test('should return an iterator whose first value is 1', t => {
  const fb = fizzBuzz();
  t.is(fb.next().value, 1);
});
