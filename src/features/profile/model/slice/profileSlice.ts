import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { ProfileSchema } from '../types/ProfileSchema';
import { editProfile } from '../service/editProfile/editProfile';

const initialState: ProfileSchema = {
  isLoading: false,
  profile: {
    name: 'Андрей',
    surname: 'Марышев',
    middleName: 'Владиславович',
    age: 25,
    registrationDate: dayjs().format(),
    phone: +79991680526,
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = { ...state.profile, ...action.payload };
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
