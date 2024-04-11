import React from 'react';

export enum ResistorValues {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue = 6,
    violet = 7,
    grey = 8,
    white = 9,
}

type Color = keyof typeof ResistorValues;

export function decodedValue([first, second]: [Color, Color]): number {
    return Number(`${ResistorValues[first]}${ResistorValues[second]}`);
}

function App() {
    const value = decodedValue(['red', 'green']);
    console.log(value);

    return (
        <div>
            <h1>Resistor Decoded Value</h1>
            {/* Aquí puedes usar la lógica necesaria con las funciones importadas */}
        </div>
    );
}

export default App;
