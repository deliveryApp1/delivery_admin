import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { appApi, categoryApi, discountApi, productApi, usersApi } from './endpoints';
import reducer from './rootReducer';

const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [appApi.reducerPath]: appApi.reducer,
    [discountApi.reducerPath]: discountApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    ...reducer
  
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(appApi.middleware)
      .concat(productApi.middleware)
      .concat(categoryApi.middleware)
      .concat(discountApi.middleware)
      .concat(usersApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
