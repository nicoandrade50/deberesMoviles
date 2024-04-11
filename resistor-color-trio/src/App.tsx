const values = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
} as const;
type Color = keyof typeof values;
const multipliers = ["", "kilo", "mega", "giga"] as const;
export function decodedResistorValue([c1, c2, c3]: [Color, Color, Color]) {
  const value = (10 * values[c1] + values[c2]) / 10;
  const exponent = values[c3] + 1;
  return `${value * 10 ** (exponent % 3)} ${multipliers[(exponent / 3) | 0]}ohms`;
}
