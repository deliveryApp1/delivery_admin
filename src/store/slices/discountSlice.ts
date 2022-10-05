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

export const discountSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateDiscountStates: (state, action: PayloadAction<CounterState>) => {
            const { openModal, modalType } = action.payload
            state.openModal = openModal
            state.modalType = modalType
        }
    },
})

export const { updateDiscountStates } = discountSlice.actions
export default discountSlice.reducer