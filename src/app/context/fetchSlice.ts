import { createSlice } from "@reduxjs/toolkit";

// Fetch Slice
const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    data: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    read(state, action) {
      async () => {
        try {
          state.isLoading = true;
          const response = await fetch(
            `http://localhost:8000/requests${
              action.payload === null ? "" : `/${action.payload}`
            }`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          state.data = data;
          state.error = null;
          state.isLoading = false;
        } catch (err) {
          state.isLoading = false;
          state.error = err.message;
        }
      };
    },
    create(state, action) {
      async () => {
        try {
          state.isLoading = true;
          const response = await fetch(`http://localhost:8000/requests`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(action.payload),
          });
          if (!response.ok) {
            throw new Error("Failed to upload data");
          }
          state.error = null;
          state.isLoading = false;
        } catch (err) {
          state.isLoading = false;
          state.error = err.message;
        }
      };
    },
    delete(state, action) {
      async () => {
        try {
          state.isLoading = true;
          const response = await fetch(
            `http://localhost:8000/requests/${action.payload}`,
            {
              method: "DELETE",
            }
          );
          if (!response.ok) {
            throw new Error("Failed to delete data");
          }
          state.error = null;
          state.isLoading = false;
        } catch (err) {
          state.isLoading = false;
          state.error = err.message;
        }
      };
    },
  },
});

export const fetchActions = fetchSlice.actions;
export default fetchSlice.reducer;
