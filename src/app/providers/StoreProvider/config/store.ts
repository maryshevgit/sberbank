import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '@/features/auth';
import { userReducer } from '@/entities/User';
import { newsReducer } from '@/features/news';
import { profileReducer } from '@/features/profile';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    news: newsReducer,
    login: loginReducer,
    user: userReducer,
  },
});
