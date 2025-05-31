import { create } from 'zustand';
import type { State, Actions } from '@/store/types.d';

const initialState = {
  arrayOfNums: Array.from({ length: 100 }, _ => 0)
};

export const useMultiCounter = create<State & Actions>()((set) => ({
  ...initialState,
  increase: () => {
    set(state => ({ arrayOfNums: state.arrayOfNums.map(n => n + 1) }));
  }
}));
