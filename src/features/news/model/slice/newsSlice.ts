import { createSlice } from '@reduxjs/toolkit';
import { addNews } from '../services/addNews/addNews';
import { NewsSchema } from '../types/NewsSchema';
import { editNews } from '../services/editNews/editNews';
import manImage from '@/shared/assets/news/man.png';
import titanicImage from '@/shared/assets/news/titanic.png';
import carImage from '@/shared/assets/news/car.png';
import oceanImage from '@/shared/assets/news/ocean.png';
import familyImage from '@/shared/assets/news/family.png';

const initialState: NewsSchema = {
  isLoading: false,
  news: [
    {
      id: '1',
      text: 'Chris Williams recommends that anyone placed on a performance-improvement plan should immediately plan their next steps outside of the company.',
      title:
        'Microsofts ex-VP of HR says you should leave a company right away if you get put on a PIP: Surviving it is like a sign on your back',
      imagePath: manImage,
      fullText:
        'The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at.',
    },
    {
      id: '2',
      title:
        'Worried passengers banded together as lookouts during rescue of overboard woman on Royal Caribbean ship, witness says',
      text: 'A 42-year-old woman miraculously survived after going overboard the 10th deck of a Royal Caribbean cruise ship on Sunday.',
      imagePath: oceanImage,
      fullText:
        'The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at.',
    },
    {
      id: '3',
      title:
        'A former waitress living paycheck-to-paycheck who now owns 35 rental units shares 2 principles she followed to achieve financial independence',
      text: 'One real estate investor lives by a Warren Buffett investing philosophy: "Be greedy when others are fearful and be fearful when others are greedy."',
      fullText:
        'The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at.',
    },
    {
      id: '4',
      title:
        'A couple bought a $7,500 abandoned New York home and is restoring it to its former Victorian glory. See inside.',
      text: 'The Noah-Vermillions have spent $60,000 so far renovating the 120-year-old home in Syracuse, New York.',
      fullText:
        'The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at.',
      imagePath: familyImage,
    },
    {
      id: '5',
      title:
        'There are double the amount of EVs compared to gas cars at dealerships — solving 2 of the biggest problems with car shopping right now',
      text: 'The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at.',
      fullText:
        'The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at.',
      imagePath: carImage,
    },
    {
      id: '6',
      title:
        "I've made 6 figures a year as a virtual assistant and now train others to do the same. Here's how I find the best-paying clients and avoid the big red flags.",
      fullText:
        'The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at.',
    },
    {
      id: '7',
      title:
        'A passenger fell overboard off the 10th deck of a Royal Caribbean cruise ship, but was miraculously saved after an hour-long rescue',
      imagePath: titanicImage,
      fullText:
        'The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at. The sudden influx in EVs on lots could help reduce frustration with not being able to find an EV to test drive or even just take a look at.',
    },
  ],
};

const newsSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = [...state.news, action.payload];
      })
      .addCase(addNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editNews.fulfilled, (state, action) => {
        state.isLoading = false;
        const editNewsItem = state.news.find(
          (newsItem) => newsItem.id === action.payload.id
        );
        if (editNewsItem) {
          const { id, imagePath, text, fullText, title } = action.payload;
          editNewsItem.id = id;
          editNewsItem.imagePath = imagePath;
          editNewsItem.title = title;
          editNewsItem.text = text;
          editNewsItem.fullText = fullText;
        }
      })
      .addCase(editNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: newsActions } = newsSlice;
export const { reducer: newsReducer } = newsSlice;
