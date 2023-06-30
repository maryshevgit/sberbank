import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import dayjs from 'dayjs';
import { IProfile } from '@/features/profile';

export interface ThunkApiConfig {
  rejectValue: string;
}

export const editProfile = createAsyncThunk<
  IProfile | Error,
  IProfile,
  ThunkApiConfig
>('profile/editProfile', async (payload, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Success');
      }, 2000);
    });
    const { name, middleName, age, surname, registrationDate, phone } = payload;
    if (
      !name ||
      !middleName ||
      !age ||
      !surname ||
      !registrationDate ||
      !phone
    ) {
      notification.error({
        placement: 'topRight',
        message: 'Нельзя сохранить пустое значение',
      });

      return new Error('Нельзя сохранить пустое число');
    }

    notification.success({
      placement: 'top',
      message: 'Профиль успешно отредактирован',
    });

    return { ...payload, registrationDate: dayjs(registrationDate).format() };
  } catch (error) {
    return rejectWithValue('Error');
  }
});
