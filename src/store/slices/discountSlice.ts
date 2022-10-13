import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface DiscountState {
    openModal: boolean;
    modalType: string;
}

const initialState = {
    openModal: false,
    modalType: ''
} as DiscountState

export const discountSlice = createSlice({
    name: 'discount',
    initialState,
    reducers: {
        updateDiscountStates: (state, action: PayloadAction<DiscountState>) => {
            const { openModal, modalType } = action.payload
            state.openModal = openModal
            state.modalType = modalType
        }
    },
})

export const { updateDiscountStates } = discountSlice.actions
export default discountSlice.reducer