import { lazy, Suspense } from "react";
import { Layout, Loading } from "components";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/ErrorHandling/NotFound";
import "antd/dist/antd.css";
const CategoryPage = lazy(() => import("pages/Category/Category"));
const ProductPage = lazy(() => import('pages/Products/Product'))
const HomePage = lazy(() => import('pages/Home'))
const DiscountPage = lazy(() => import("pages/Discount/Discount"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/discount" element={<DiscountPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
