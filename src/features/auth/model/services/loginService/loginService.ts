import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { userActions } from '@/entities/User';
import { LoginInput } from '../../types/AuthSchema';
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

export interface ThunkApiConfig {
  rejectValue: string;
}

export const loginService = createAsyncThunk<
  LoginInput | Error,
  LoginInput,
  ThunkApiConfig
>('login/loginAsync', async (payload, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI;

  try {
    const { username, password } = payload;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Success');
      }, 2000);
    });

    if (username === 'user' && password === '12345') {
      dispatch(userActions.setAuthData(true));
      localStorage.setItem(ACCESS_TOKEN_LOCALSTORAGE_KEY, 'true');
      return { username, password };
    }

    notification.error({
      placement: 'topRight',
      message: 'Логин или пароль указаны не верно',
    });
    return new Error('Логин или пароль указаны не верно');
  } catch (error) {
    return rejectWithValue('Error');
  }
});
