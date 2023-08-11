import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import breedsReducer from './slices/breedsSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger();
export default configureStore({
    reducer: {
        breedsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});