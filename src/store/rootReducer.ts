import  usersSlice  from './../pages/Users/usersSlice';
import  categorySlice from './slices/categorySlice';
import productSlice from '../pages/Products/productSlice'
import discountSlice from './slices/discountSlice';

const reducer = {
    productSlice,
    categorySlice,
    discountSlice,
    usersSlice
}
export default reducer