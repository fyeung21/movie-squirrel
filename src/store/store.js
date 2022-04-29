import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from '../features/favourites/favouritesSlice';

//for storing features aka state objects
const store = configureStore({
  reducer: {
    favourites: favouritesReducer
  }
});

export default store;