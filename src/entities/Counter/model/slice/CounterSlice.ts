import { PayloadAction } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = buildSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    add: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialState,
//   reducers: {
//     increment: state => {
//       state.value += 1;
//     },
//     decrement: state => {
//       state.value -= 1;
//     },
//   },
// });

export const {
  actions: CounterActions,
  reducer: CounterReducer,
  useActions: useCounterActions,
} = counterSlice;
// export const { reducer: CounterReducer } = counterSlice;
