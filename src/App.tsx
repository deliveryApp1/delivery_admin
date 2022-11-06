import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/ErrorHandling/NotFound";
import "antd/dist/antd.css";
import { MainLayout } from "./components";
import { HomePage, InitialPage, Users, Orders, Discount, Category, Login, Products } from './pages'
import RequireAuth from "components/RequireAuth/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/clients" element={<InitialPage />} />
      <Route path="/login" element={<Fragment><Login /></Fragment>} />
      <Route path="/" element={<RequireAuth><MainLayout /></RequireAuth>} >
        <Route index element={<RequireAuth><HomePage /></RequireAuth>} />
        <Route path="category" element={<RequireAuth><Category /></RequireAuth>} />
        <Route path="products" element={<RequireAuth><Products /></RequireAuth>} />
        <Route path="discount" element={<RequireAuth><Discount /></RequireAuth>} />
        <Route path="orders" element={<RequireAuth><Orders /></RequireAuth>} />
        <Route path="users" element={<RequireAuth><Users /></RequireAuth>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
