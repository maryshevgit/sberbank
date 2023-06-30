import { INewsCard } from '@/entities/NewsCard';

export interface NewsSchema {
  news: INewsCard[];
  isLoading: boolean;
  error?: string;
}
