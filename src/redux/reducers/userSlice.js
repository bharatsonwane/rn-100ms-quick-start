import {createSlice, current} from '@reduxjs/toolkit';
import {getMeetingUrl} from '../../utils/functions';
import {getMeetingCode} from '../../utils/functions';

const initialState = {
  userName: '',
  roomLink: getMeetingUrl(),
  roomCode: getMeetingCode(),
  hmsLocalPeer: null,
  hmsInstance: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {
    saveUserDataAction: (state, action) => {
      //   const {userName, roomLink, roomCode, hmsInstance, hmsLocalPeer} =
      //     action.payload;

      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },

    clearHmsReferenceAction: (state, action) => {
      state.hmsInstance = null;
    },
  },

  extraReducers: {},
});

export const {saveUserDataAction, clearHmsReferenceAction} = userSlice.actions;

export default userSlice;
