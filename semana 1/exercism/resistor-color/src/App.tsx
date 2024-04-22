import React from 'react';

export const colorCode = (value: string): number | null => {
    const index: number = COLORS.indexOf(value.toLowerCase());
    return index !== -1 ? index : null;
}

export const COLORS: string[] = [
    "black", "brown",
    "red", "orange",
    "yellow", "green",
    "blue", "violet",
    "grey", "white"
];

function App() {
    const code = colorCode("red");
    console.log(code);

    return (
        <div>
            <h1>Color Code</h1>
        </div>
    );
}

export default App;
