import { configureStore } from "@reduxjs/toolkit";

import phonesSlice from "./slices/phonesSlice";

const store = configureStore({
  reducer: {
    phones: phonesSlice,
  },
});

export default store;
