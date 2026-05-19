import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUserId: null,
  isEditModalOpen: false,
  searchQuery: '',
};

const userSlice = createSlice({
  name: 'userUI',
  initialState,
  reducers: {
    selectUserForEditing: (state, action) => {
      state.selectedUserId = action.payload;
      state.isEditModalOpen = true;
    },
    closeEditModal: (state) => {
      state.selectedUserId = null;
      state.isEditModalOpen = false;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  selectUserForEditing,
  closeEditModal,
  setSearchQuery,
} = userSlice.actions;

export default userSlice.reducer;