import { lazy, Suspense } from "react";
import { Layout, Loading } from "components";
import { Route, Routes } from "react-router-dom";

import "antd/dist/antd.css";

const CategoryPage = lazy(() => import("pages/Category/Category"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
