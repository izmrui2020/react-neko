import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';
import { PROPS_AUTHEN, PROPS_PROFILE, PROPS_NICKNAME } from "../types";


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { 
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
