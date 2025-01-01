import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage is localStorage
import cartReducer from "./cartSlice"; // Your cart slice

// Persist configuration
const persistConfig = {
  key: "cart", // Key for localStorage
  storage, // Storage mechanism (localStorage)
};

// Persisted reducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Configure the store with middleware for serializability
const appStore = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
  // Allow non-serializable data like functions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore persist actions
        ignoredPaths: ["register"], // Ignore the `register` path that is triggering the warning
      },
    }),
});

// Persistor to rehydrate state
export const persistor = persistStore(appStore);

export default appStore;
