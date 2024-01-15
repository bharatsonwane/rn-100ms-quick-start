import {createSlice, current} from '@reduxjs/toolkit';

const initialState = {
  joinConfig: {
    mutedAudio: true,
    mutedVideo: true,
    mirrorCamera: true,
  },
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState: initialState,
  reducers: {
    resetJoinConfig: (state, action) => {
      state.joinConfig = initialState.joinConfig;
    },
    changeJoinAudioMuted: (state, action) => {
      state.joinConfig.mutedAudio = action.payload;
    },
    changeJoinVideoMuted: (state, action) => {
      state.joinConfig.mutedVideo = action.payload;
    },
    changeMirrorCamera: (state, action) => {
      state.joinConfig.mirrorCamera = action.payload;
    },
  },

  extraReducers: {},
});

export const {
  resetJoinConfig,
  changeJoinAudioMuted,
  changeJoinVideoMuted,
  changeMirrorCamera,
} = appSlice.actions;

export default appSlice;
