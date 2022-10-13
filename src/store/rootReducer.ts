import usersSlice from './slices/usersSlice';
import categorySlice from './slices/categorySlice';
import productSlice from './slices/productSlice'
import discountSlice from './slices/discountSlice';
import orderSlice from './slices/orderSlice';

const reducer = {
    productSlice,
    categorySlice,
    discountSlice,
    usersSlice,
    orderSlice
}
export default reducer