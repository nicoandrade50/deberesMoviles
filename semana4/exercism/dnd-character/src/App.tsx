import React, { useState } from 'react';

interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;
}

const generateAbilityScore = (): number => {
  const rolls: number[] = [...Array(4)].map(() => generateRandomDiceRollScore());
  return rolls.sort((a, b) => a - b).slice(0, 3).reduce((sum, n) => sum + n);
};

const getModifierFor = (numberValue: number): number => {
  return Math.floor((numberValue - 10) / 2);
};

const generateRandomDiceRollScore = (): number => {
  return Math.floor(Math.random() * 6) + 1;
};

const DnDCharacter: React.FC = () => {
  const [abilityScores, setAbilityScores] = useState<AbilityScores | null>(null);

  const generateScores = () => {
    const strength = generateAbilityScore();
    const dexterity = generateAbilityScore();
    const constitution = generateAbilityScore();
    const intelligence = generateAbilityScore();
    const wisdom = generateAbilityScore();
    const charisma = generateAbilityScore();
    const hitpoints = 10 + getModifierFor(constitution);

    const newAbilityScores: AbilityScores = {
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
      hitpoints
    };

    setAbilityScores(newAbilityScores);
  };

  return (
    <div>
      <h1>D&D Character</h1>
      {abilityScores && (
        <ul>
          <li>Strength: {abilityScores.strength}</li>
          <li>Dexterity: {abilityScores.dexterity}</li>
          <li>Constitution: {abilityScores.constitution}</li>
          <li>Intelligence: {abilityScores.intelligence}</li>
          <li>Wisdom: {abilityScores.wisdom}</li>
          <li>Charisma: {abilityScores.charisma}</li>
          <li>Hitpoints: {abilityScores.hitpoints}</li>
        </ul>
      )}
      <button onClick={generateScores}>Generate Ability Scores</button>
    </div>
  );
};

export default DnDCharacter;
