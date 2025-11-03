const stripTime = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());

export function isDateInRange(
  date: Date,
  rangeStart: Date,
  rangeEnd: Date
): boolean {
  const normalizedDate = stripTime(date);
  const normalizedStart = stripTime(rangeStart);
  const normalizedEnd = stripTime(rangeEnd);

  return normalizedDate >= normalizedStart && normalizedDate <= normalizedEnd;
}
