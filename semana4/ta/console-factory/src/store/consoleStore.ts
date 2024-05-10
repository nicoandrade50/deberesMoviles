

import create, { SetState } from 'zustand';

interface ConsoleState {
  totalProduced: number;
  totalDistributed: number;
  inStock: number;
}

interface ConsoleActions {
  produce: () => void;
  distribute: () => void;
  restock: (quantity: number) => void;
}

type ConsoleStore = ConsoleState & ConsoleActions;

export const useConsoleStore = create<ConsoleStore>((set: SetState<ConsoleStore>) => ({
  totalProduced: 0,
  totalDistributed: 0,
  inStock: 0,

  produce: () => set((state) => ({ totalProduced: state.totalProduced + 1 })),
  distribute: () =>
    set((state) => ({ totalDistributed: state.totalDistributed + 1, inStock: state.inStock - 1 })),
  restock: (quantity) => set((state) => ({ inStock: state.inStock + quantity })),
}));
