import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {reset: false, buttonPressed: false, show: false, modalCheck: false};

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
        show(state, action){
            state.show=!state.show;
            state.modalCheck=action.payload;
        },
    }
})


const store = configureStore({
    reducer: {form: formSlice.reducer}
}) ;

export const formActions = formSlice.actions;
export default store;   