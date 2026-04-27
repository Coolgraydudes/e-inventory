import { createSlice } from "@reduxjs/toolkit";


let id = 1;

export const inventorySlice = createSlice({
    name: "todo",
    initialState: {
        listInventory:[],
    },
    reducers: {
        tambahInventory: (state, action) => {
            state.listInventory.push(action.payload)
        },
        hapusSemua: (state) => {
            state.listInventory = [];
        }
     }
})

export const {tambahInventory, hapusSemua} = inventorySlice.actions;
export default inventorySlice.reducer;