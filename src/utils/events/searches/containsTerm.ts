export default function containsTerm(target: string, term: string) {
  return target.toLowerCase().includes(term.toLowerCase());
}
