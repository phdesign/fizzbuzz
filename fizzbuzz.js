function* fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
      yield "FizzBuzz";
    else if (i % 3 === 0)
      yield "Fizz";
    else if (i % 5 === 0)
      yield "Buzz";
    else
      yield i;
  }
}

export { fizzBuzz };
