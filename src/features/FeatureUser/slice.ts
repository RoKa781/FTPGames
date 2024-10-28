import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from './utils/types';
import { RootState } from '../../app/store/store';

const initialState: IUserState = {
  user: '',
  isAuth: false,
  favorites: [],
};

const getFavoritesFromStorage = () => {
  const favoritesIds = JSON.parse(localStorage.getItem('likedItems') || '[]');
  return favoritesIds;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = '';
      state.isAuth = false;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    getFavoriteFromStorage: (state) => {
      state.favorites = getFavoritesFromStorage();
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectFavoritesId = (state: RootState) => state.user.favorites;
export const { logout, login, getFavoriteFromStorage } = userSlice.actions;
