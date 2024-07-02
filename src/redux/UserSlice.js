import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk("user/get", async () => {
	try {
		let result = await axios.get(`http://localhost:5000/user/`);
	    return result;
	} catch (error) {
		console.log(error);
	}
});

export const addUser = createAsyncThunk("user/add", async (newUser) => {
	try {
		let result = await axios.post(`http://localhost:5000/user/add`, newUser);
	    return result;
	} catch (error) {
		console.log(error);
	}
});

export const deleteUser = createAsyncThunk("user/delete", async (id) => {
	try {
		let result = await axios.delete(`http://localhost:5000/user/${id}`);
	    return result;
	} catch (error) {
		console.log(error);
	}
});

export const updateUser = createAsyncThunk("user/edit", async ({id, etided}) => {
	try {
		let result = await axios.put(`http://localhost:5000/user/${id}`, etided);
	    return result;
	} catch (error) {
		console.log(error);
	}
});

const initialState = {
  userList: null,
  status: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
	builder
	
	//Get all users
	.addCase(getUser.pending, (state) => {
		state.status = "pending";
	})
	.addCase(getUser.fulfilled, (state, action) => {
		state.status = "success";
		state.userList = action.payload.data.users;
	})
	.addCase(getUser.rejected, (state) => {
		state.status = "failed";
	})
	
	//Add user
	.addCase(addUser.pending, (state) => {
		state.status = "pending";
	})
	.addCase(addUser.fulfilled, (state, action) => {
		state.status = "success";		
	})
	.addCase(addUser.rejected, (state) => {
		state.status = "failed";
	})

	//Delete
	.addCase(deleteUser.pending, (state) => {
		state.status = "pending";
	})
	.addCase(deleteUser.fulfilled, (state, action) => {
		state.status = "success";		
	})
	.addCase(deleteUser.rejected, (state) => {
		state.status = "failed";
	})

	//Update
	.addCase(updateUser.pending, (state) => {
		state.status = "pending";
	})
	.addCase(updateUser.fulfilled, (state, action) => {
		state.status = "success";		
	})
	.addCase(updateUser.rejected, (state) => {
		state.status = "failed";
	})
  }
  
})


export const { } = userSlice.actions

export default userSlice.reducer

