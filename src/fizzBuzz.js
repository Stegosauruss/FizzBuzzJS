function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0 )
    return 'fizzbuzz';
  else if (number % 3 === 0)
    return 'fizz';
  else if (number % 5 === 0)
    return 'buzz';
  else
    return number;  
}

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}