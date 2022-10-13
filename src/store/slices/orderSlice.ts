import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface OrderState {
    openModal: boolean;
    modalType: string;
}

const initialState = {
    openModal: false,
    modalType: ''
} as OrderState

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updateOrderStates: (state, action: PayloadAction<OrderState>) => {
            const { openModal, modalType } = action.payload
            state.openModal = openModal
            state.modalType = modalType
        }
    },
})

export const { updateOrderStates } = orderSlice.actions
export default orderSlice.reducer