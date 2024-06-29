//Iterative Method

function fibs(n) {
  let result = [0, 1];
  if (n <= 1) return [0].slice(0, n);
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

console.log(fibs(8));

//Recursive Method
function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let seq = fibsRec(n - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
}

console.log(fibsRec(8));
