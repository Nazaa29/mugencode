import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {reset: false, buttonPressed: false, show: false};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers:{
        toggleButton(state){
            state.buttonPressed=!state.buttonPressed;
        },
        reset(state){
            state.reset=!state.reset;
            state.validity=false;
        },
        show(state){
            state.show=!state.show;
        }
    }
})


const store = configureStore({
    reducer: {form: formSlice.reducer}
}) ;

export const formActions = formSlice.actions;
export default store;   