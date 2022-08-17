import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
   name: 'filter',
   initialState: {filterValue: ''},
   reducers: {
    filterItems: (state, action) => {
       return { ...state, filterValue: action.payload };
    },
  },
});

export const { filterItems } = filterSlice.actions;
