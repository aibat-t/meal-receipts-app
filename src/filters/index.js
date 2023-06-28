export function truncateWords(str, count) {
  if (!str) return str;
  return str.split(" ").splice(0, count).join(" ");
}
