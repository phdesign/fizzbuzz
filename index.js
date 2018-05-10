import { fizzBuzz } from './fizzbuzz';

const fb = fizzBuzz();

let i = 1;
for (let val of fb) {
    console.log(`[${i++}]: ${val}`);
}

