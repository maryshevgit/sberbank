export interface AuthSchema {
  isLoading: boolean;
  error?: string;
}

export interface LoginInput {
  password: string;
  username: string;
}
