import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'
import tokenReducer from '../features/user/tokenSlice'


export default configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer
  },
  middleware: [...getDefaultMiddleware()]
});
