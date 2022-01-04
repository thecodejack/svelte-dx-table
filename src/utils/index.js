export function snakeCaseToTitleSentence(text) {
  const result = text.replace(/([A-Z]{1,})/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function compare(a, b, key) {
  if (a[key] > b[key]) return 1;
  if (a[key] < b[key]) return -1;
  return 0;
}

export function compareDesc(a, b, key) {
  if (a[key] < b[key]) return 1;
  if (a[key] > b[key]) return -1;
  return 0;
}
