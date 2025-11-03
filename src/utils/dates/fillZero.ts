export function fillZero(value: number, size = 2) {
  return String(value).padStart(size, '0');
}
