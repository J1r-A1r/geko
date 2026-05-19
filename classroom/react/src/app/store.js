import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import authReducer from '../features/auth/authSlice';
import userUIReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userUI: userUIReducer,
    [api.reducerPath]: api.reducer, // Подключаем кэш от RTK Query
  },
  // Обязательно добавляем мидлвар для работы кэширования и инвалидации тегов
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});