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

const ColorCodeComponent: React.FC = () => {
    const code = colorCode("red");
    const codeMessage = code !== null ? `The color code for red is ${code}.` : "Color not found.";

    return (
        <div>
            <h1>Color Code</h1>
            <p>{codeMessage}</p>
        </div>
    );
};

export default ColorCodeComponent;
