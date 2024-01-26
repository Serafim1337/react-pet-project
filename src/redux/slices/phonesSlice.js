import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const entityAdapder = createEntityAdapter();

const initialState = entityAdapder.getInitialState({});

const phonesSlice = createSlice({
  name: "phones",
  initialState: initialState,
  reducers: {},
});

export default phonesSlice.reducer;
