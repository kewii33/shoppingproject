import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import SignupPage from "../routes/SignupPage";
import LoginPage from "../routes/LoginPage";
import ProductDetail from "../routes/ProductDetail";
import ShoppingCart from "../routes/ShoppingCart";
import SearchResult from "../routes/SearchResult";
import Mypage from "../routes/Mypage";
import NewProduct from "../routes/NewProduct";
import ProductList from "../routes/ProductList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login" element={<Mypage />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/detail/:productId" element={<ProductDetail />} />
      <Route path="/newproduct" element={<NewProduct />} />
      <Route path="/shoppingcart" element={<ShoppingCart />} />
      <Route path="/search/:keyword" element={<SearchResult />} />
    </Routes>
  );
};

export default Router;
