function getSumBetweenNumbers(num) {
  const sum = [...String(num)];
  const sum2 = String(num).split('');
  console.log(sum, sum2);
}
console.log(getSumBetweenNumbers(15));
