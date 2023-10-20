import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {reset: false, buttonPressed: false};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers:{
        toggleButton(state){
            state.buttonPressed=!state.buttonPressed;
        },
        reset(state){
            state.reset=!state.reset;
        },
    }
})


const store = configureStore({
    reducer: {form: formSlice.reducer}
}) ;

export const formActions = formSlice.actions;
export default store;   