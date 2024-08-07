import { Link, useNavigate } from "react-router-dom";
import cartlogo from "../assets/imgs/cartlogo.png";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const navigator = useNavigate();
  return (
    <div className="flex justify-between items-center bg-white px-8 py-2 shrink-0 sticky z-50 top-0 inset-x-0 bg-opacity-70 backdrop-blur-lg h-auto">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={cartlogo} alt="쇼핑몰 로고" width={60} height={60} />
          <h1 className="font-bold">shopper</h1>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/productlist">
          <p>전체 카테고리</p>
        </Link>
        <Link to="/shoppingcart">
          <FaShoppingCart />
        </Link>
        <button onClick={() => navigator("/login")}>로그인</button>
      </div>
    </div>
  );
};

export default NavBar;
