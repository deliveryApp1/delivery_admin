import { lazy, Suspense } from "react";
import { Layout } from "components";
import { Route, Routes } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { NotFound } from "./components/ErrorHandling/NotFound";
import "antd/dist/antd.css";
const CategoryPage = lazy(() => import("pages/Category/Category"));
const ProductPage = lazy(() => import('pages/Products/Product'))
const HomePage = lazy(() => import('pages/Home'))
const DiscountPage = lazy(() => import("pages/Discount/Discount"));
const UsersPage = lazy(() => import("pages/Users/Users"));
const OrdersPage = lazy(() => import('pages/Orders/Orders'))

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


function App() {
  return (
    <Layout>
      <Suspense fallback={<Spin indicator={antIcon} />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/discount" element={<DiscountPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
