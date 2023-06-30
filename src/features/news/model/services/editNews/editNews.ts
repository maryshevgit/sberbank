import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { INewsCard } from '@/entities/NewsCard';

export interface ThunkApiConfig {
  rejectValue: string;
}

export const editNews = createAsyncThunk<INewsCard, INewsCard, ThunkApiConfig>(
  'news/editNews',
  async (payload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Success');
        }, 2000);
      });
      const { title } = payload;
      if (!title) {
        notification.error({
          placement: 'topRight',
          message: 'Название не указано',
        });
      }

      notification.success({
        placement: 'topLeft',
        message: 'Новость успешно отредактирована',
      });

      return payload;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
