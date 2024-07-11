export function analyzeArray(array) {
  if (!Array.isArray(array) || array.length === 0) return {};

  const sum = array.reduce((acc, num) => acc + num, 0);
  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average,
    min,
    max,
    length: array.length,
  };
}
