import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
  isAuth: false,
  isInit: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state: UserSchema, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    initAuthData: (state: UserSchema) => {
      const user = localStorage.getItem(ACCESS_TOKEN_LOCALSTORAGE_KEY);
      if (user) {
        state.isAuth = JSON.parse(user);
      }
      state.isInit = true;
    },
    logout: (state: UserSchema) => {
      state.isAuth = false;
      localStorage.removeItem(ACCESS_TOKEN_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
