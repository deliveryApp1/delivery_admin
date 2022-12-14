import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
    openModal: boolean;
    modalType: string;
}

const initialState = {
    openModal: false,
    modalType: ''
} as ProductState

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateProductStates: (state, action: PayloadAction<ProductState>) => {
            const { openModal, modalType } = action.payload
            state.openModal = openModal
            state.modalType = modalType
        }
    },
})

export const { updateProductStates } = productSlice.actions
export default productSlice.reducer