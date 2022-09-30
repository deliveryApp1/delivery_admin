import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { categoryApi,discountApi,photosApi } from './endpoints';



const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [discountApi.reducerPath]: discountApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,

    // filters: filtersSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(discountApi.middleware)
      .concat(photosApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
