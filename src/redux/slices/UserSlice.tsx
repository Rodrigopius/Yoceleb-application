import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  user: User
  authToken: string,
}

interface User {
  UID: string;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  role: string,
  displayPicture: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: {
    UID: '',
    fname: '',
    lname: '',
    email: '',
    displayPicture: '',
    role: "",
    phone: "",
  },
  authToken: '',

};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<UserState>) => {

      state.isLoggedIn = action.payload?.isLoggedIn;
      state.user = action.payload?.user;
      state.authToken = action.payload?.authToken;
    },

    logoutUser: state => {
      state.isLoggedIn = false;
      state.user = {
        UID: '',
        fname: '',
        lname: '',
        email: '',
        displayPicture: '',
        role: "",
        phone: ""
      }
    },


    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },

    updateProfilePicture: (state, action: PayloadAction<string>) => {

      if (state && state.user) {
        state.user.displayPicture = action.payload;
      }
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  updateUserState,
  logoutUser,
  updateProfilePicture,
  updateIsLoggedIn,
} = userSlice.actions;

export default userSlice.reducer;
