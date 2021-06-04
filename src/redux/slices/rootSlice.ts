import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Hilda',
        model: "2002",
        make: "BMW",
        year: 1976,
        category: 'sports coupe',
        seats: 4,
        horsepower: 100,
        torque: 95,
        color: 'white',
        interior: 'blue cloth'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseModel: (state, action) => { state.model = action.payload }
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseModel, } = rootSlice.actions;