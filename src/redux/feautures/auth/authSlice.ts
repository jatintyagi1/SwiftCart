import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { SignUp } from '../../../services/customer.service';

////////////////////////////////////////////////////////////////////////
//   
//   Checking email and mobile number already exist
//
///////////////////////////////////////////////////////////////////////

interface UserState {
  user: { email: string; mobileNumber: string } | null;
  loading: boolean;
  error: string | null;
}

////////////////////////////////////////////////////////////////////////
//   
//   Providing initial State ( null )
//
///////////////////////////////////////////////////////////////////////


const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};



export const signupUser = createAsyncThunk(
  '/sign-up',
  async (userData: { email: string; mobileNumber: string; password: string; confirmPassword: string }) => {
    const response = await SignUp(userData);
    return response.data;
  }
);

////////////////////////////////////////////////////////////////////////
//   
//   Create Slice for Signup
//
///////////////////////////////////////////////////////////////////////


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<{ email: string; mobileNumber: string }>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to sign up';
      });
  },
});

export default authSlice.reducer;
