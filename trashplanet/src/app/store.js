import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger'
import userReducer from '../features/Slices/user/userSlice'
import tokenReducer from '../features/Slices/user/tokenSlice'
import feedModalReducer from '../features/Slices/feedModalSlice'
import productReducer from '../features/Pages/ItemPage/itemPageSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    feedModalImg: feedModalReducer,
    product: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
