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

test('should return an iterator whose second value is 2', t => {
  const fb = fizzBuzz();
  fb.next();
  t.is(fb.next().value, 2);
});

test('should return an iterator whose third value is "Fizz"', t => {
  const fb = fizzBuzz();
  fb.next();
  fb.next();
  t.is(fb.next().value, "Fizz");
});

test('should return an iterator with 100 values', t => {
  const fb = fizzBuzz();
  let i;
  for (i = 0; !fb.next().done; ++i);
  t.is(i, 100);
});

test('should return an iterator where every value divisible by 3 is "Fizz"', t => {
  const fb = fizzBuzz();
  let i = 1;
  for (let val of fb) {
    if (i++ % 3 === 0)
      t.is(val, "Fizz");
  }
});

test('should return an iterator where every value divisible by 5 is "Buzz"', t => {
  const fb = fizzBuzz();
  let i = 1;
  for (let val of fb) {
    if (i++ % 5 === 0)
      t.is(val, "Buzz", `Expected element at ${i} to be "Buzz"`);
  }
});

