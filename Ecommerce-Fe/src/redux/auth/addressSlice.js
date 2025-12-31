import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import { action_status } from "../../utils/constants/status";

export const addAddress = createAsyncThunk(
  "user/addAdress",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userApi.addAddress(payload);
      return response.data.user.address; // Return updated address array
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editAddress = createAsyncThunk(
  "user/editAddress",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userApi.updateAddress(payload);
      return response.data.user.address;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "user/deleteAddress",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userApi.deleteAddress(payload);
      return response.data.user.address;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const setAddressDefault = createAsyncThunk(
  "user/setAddressDefault",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userApi.updateDefault(payload);
      return response.data.user.address;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAddress = createAsyncThunk("user/getAddress", async () => {
  const response = await userApi.getAddress();
  return response.data.address;
});

const userSlice = createSlice({
  name: "address",
  initialState: {
    status: action_status.IDLE,
    address: [],
    updateAddress: false,
    add: false,
    deleteAddress: false,
  },
  reducers: {
    refresh: (state, action) => {
      state.updateAddress = false;
      state.add = false;
      state.deleteAddress = false;
    },
  },
  extraReducers: {
    [addAddress.pending]: (state, action) => {
      state.add = false;
    },
    [addAddress.fulfilled]: (state, action) => {
      state.add = true;
      state.address = action.payload || []; // Update address list with new data
    },
    [addAddress.rejected]: (state, action) => {
      state.add = false;
    },
    [editAddress.fulfilled]: (state, action) => {
      state.updateAddress = true;
      state.address = action.payload || [];
    },
    [setAddressDefault.fulfilled]: (state, action) => {
      state.updateAddress = true;
      state.address = action.payload || [];
    },
    [deleteAddress.fulfilled]: (state, action) => {
      state.deleteAddress = true;
      state.address = action.payload || [];
    },
    [getAddress.pending]: (state, action) => {
      state.status = action_status.LOADING;
    },
    [getAddress.fulfilled]: (state, action) => {
      state.status = action_status.SUCCEEDED;
      state.address = action.payload;
    },
    [getAddress.rejected]: (state, action) => {
      state.status = action_status.FAILED;
    },
  },
});

const { actions, reducer } = userSlice;
export const { refresh } = actions;
export default reducer;
