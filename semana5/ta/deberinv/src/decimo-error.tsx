import React, { useReducer } from 'react';

interface State {
  count: number;
}

type Action = { type: 'increment' } | { type: 'decrement' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }; // correcto: respetando la inmutabilidad
    case 'decrement':
      state.count--; // incorrecto: modificando el estado directamente
      return state;
    default:
      return state;
  }
};

const NotImmutableReducerState: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
};
