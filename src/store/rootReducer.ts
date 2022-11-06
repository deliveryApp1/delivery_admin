import usersSlice from './slices/usersSlice';
import categorySlice from './slices/categorySlice';
import productSlice from './slices/productSlice'
import discountSlice from './slices/discountSlice';
import orderSlice from './slices/orderSlice';
import authSlice from './slices/authSlice';

const reducer = {
    productSlice,
    categorySlice,
    discountSlice,
    usersSlice,
    orderSlice,
    authSlice
}
export default reducer