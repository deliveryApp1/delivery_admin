import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UsersState {
    openModal: boolean;
    modalType: string;
}

const initialState = {
    openModal: false,
    modalType: ''
} as UsersState

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUsersStates: (state, action: PayloadAction<UsersState>) => {
            const { openModal, modalType } = action.payload
            state.openModal = openModal
            state.modalType = modalType
        }
    },
})

export const { updateUsersStates } = usersSlice.actions
export default usersSlice.reducer