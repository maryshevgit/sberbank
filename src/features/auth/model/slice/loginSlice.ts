import { createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';
import { loginService } from '../services/loginService/loginService';

const initialState: AuthSchema = {
  isLoading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginService.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
