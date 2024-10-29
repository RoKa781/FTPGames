import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from './utils/types';
import { RootState } from '../../app/store/store';

const getFavoritesFromStorage = () => JSON.parse(localStorage.getItem('likedItems') || '[]');

const getThemeFromStorage = () => {
  const theme = localStorage.getItem('theme');
  return theme ? theme === 'light' : false;
};

const getUserFromStorage = () => localStorage.getItem('user') || '';

const initialState: IUserState = {
  user: getUserFromStorage(),
  isAuth: !!getUserFromStorage(),
  favorites: getFavoritesFromStorage(),
  isLight: getThemeFromStorage(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = '';
      state.isAuth = false;
      localStorage.removeItem('user');
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      localStorage.setItem('user', action.payload);
    },
    getFavoriteFromStorage: (state) => {
      state.favorites = getFavoritesFromStorage();
    },
    toggleTheme: (state) => {
      state.isLight = !state.isLight;
      localStorage.setItem('theme', state.isLight ? 'light' : 'dark');
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectFavoritesId = (state: RootState) => state.user.favorites;
export const selectIsLight = (state: RootState) => state.user.isLight;
export const { logout, login, getFavoriteFromStorage, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
