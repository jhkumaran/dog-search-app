import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const getBreeds = createAsyncThunk('getBreeds', async() => {
    const response = await api.get('/breeds')
    return response.data;
})

export const breedsSlice = createSlice({
    name: 'breedsSlice',
    initialState: {
        breeds: [],
        fecthStatus: {
            isLoading: false,
            isFailure: false,
            isSuccess: false
        }
    },
    reducers: {
    },
    extraReducers(builder){
        builder
        .addCase(getBreeds.pending, (state, action) => {
            state.breeds = [];
            state.fecthStatus = {
                isLoading: true, isFailure: false, isSuccess: false
            }
        })
        .addCase(getBreeds.fulfilled, (state, action) => {
            state.breeds = action.payload;
            state.fecthStatus = {
                isLoading: false, isFailure: false, isSuccess: true
            }
        })
        .addCase(getBreeds.rejected, (state, action) => {
            state.breeds = [];
            state.fecthStatus = {
                isLoading: false, isFailure: true, isSuccess: false
            }
        })
    }
});

export default breedsSlice.reducer;