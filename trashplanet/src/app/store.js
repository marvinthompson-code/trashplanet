import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger'
import userReducer from '../features/user/userSlice'
import tokenReducer from '../features/user/tokenSlice'
import feedModalReducer from '../features/Shop/feedModalSlice'
import productReducer from '../features/ItemPage/itemPageSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    feedModalImg: feedModalReducer,
    product: productReducer
  },
  middleware: [...getDefaultMiddleware(), logger]
});
