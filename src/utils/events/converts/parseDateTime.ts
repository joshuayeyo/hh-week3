export function parseDateTime(date: string, time: string) {
  return new Date(`${date}T${time}`);
}
