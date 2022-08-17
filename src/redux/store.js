import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'api/axios';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware]
});