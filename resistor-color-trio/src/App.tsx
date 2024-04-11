import React from 'react';

export const values = {
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

export const multipliers = ["", "kilo", "mega", "giga"] as const;

export function decodedResistorValue([c1, c2, c3]: [Color, Color, Color]): string {
    const value = (10 * values[c1] + values[c2]) / 10;
    const exponent = values[c3] + 1;
    return `${value * 10 ** (exponent % 3)} ${multipliers[(exponent / 3) | 0]}ohms`;
}

const App: React.FC = () => {
    const value = decodedResistorValue(['red', 'green', 'blue']);
    console.log(value);

    return (
        <div>
            <h1>Resistor Decoded Value</h1>
            <p>{value}</p>
        </div>
    );
}

export default App;