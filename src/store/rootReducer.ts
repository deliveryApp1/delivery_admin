import usersSlice from './slices/usersSlice';
import categorySlice from './slices/categorySlice';
import productSlice from './slices/productSlice'
import discountSlice from './slices/discountSlice';

const reducer = {
    productSlice,
    categorySlice,
    discountSlice,
    usersSlice
}
export default reducer