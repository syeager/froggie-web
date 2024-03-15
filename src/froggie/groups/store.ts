import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Group } from "./models/Group";
import { GetUsersGroupCommand } from "./commands/GetUsersGroupsCommand";

interface GroupsState {
  groups: Group[];
}

const initialState: GroupsState = {
  groups: [],
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersGroupsAsync.fulfilled, (state, action) => {
      state.groups = action.payload;
    });
  },
});

export const getUsersGroupsAsync = createAsyncThunk(
  "groups/getUsersGroupsAsync",
  GetUsersGroupCommand
);

export default groupsSlice.reducer;
