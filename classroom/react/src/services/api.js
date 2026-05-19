import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.example.com/api', // Замени на URL своего бэкенда
  prepareHeaders: (headers, { getState }) => {
    // Автоматически берем токен из стейта авторизации
    const token = getState().auth?.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, apiInstance, extraOptions) => {
  let result = await baseQuery(args, apiInstance, extraOptions);
  
  // Если токен протух или невалиден — принудительно разлогиниваем
  if (result.error && result.error.status === 401) {
    apiInstance.dispatch(logOut());
  }
  
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Post'], // Регистрируем теги для автоматического обновления кэша
  endpoints: () => ({}), // Сюда мы будем инжектировать эндпоинты из других файлов
});