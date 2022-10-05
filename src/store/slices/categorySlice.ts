import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface CounterState {
    openModal: boolean;
    modalType: string;
}

const initialState = {
    openModal: false,
    modalType: ''
} as CounterState

export const categorySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateCategoryStates: (state, action: PayloadAction<CounterState>) => {
            const { openModal, modalType } = action.payload
            state.openModal = openModal
            state.modalType = modalType
        }
    },
})

export const { updateCategoryStates } = categorySlice.actions
export default categorySlice.reducer