import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Annotation 2025-04-30 082137.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import HeaderCatalog from "../headerCatalog/HeaderCatalog";

const Header = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  const handleCatalogOpen = () => {
    setShowCatalog(true);
  };

  const handleCatalogClose = () => {
    setShowCatalog(false);
  };

  return (
    <>
      <header>
        <div className="header-left">
          <Link to='/'>
            <img height={47} width={147} src={logo} alt="alif shop logo" />
          </Link>
        </div>

        <button className="catalog-btn" onClick={handleCatalogOpen}>
          <span className="calalog-span1">&#9776;</span>
          <span>Tovarlar katalogi</span>
        </button>

        <div className="search-box">
          <input type="text" placeholder="Tovarlarni izlash" />
          <button>
            <FaMagnifyingGlass />
          </button>
        </div>

        <div className="header-links">
          <Link to="/savat">
            <GrCart />
            <span style={{ color: "gray" }}>Savat</span>
          </Link>
          <Link to='/favourates'>
            <FaRegHeart />
            <span style={{ color: "gray" }}>Saralanganlar</span>
          </Link>
          <button className="login-btn">Kirish</button>
        </div>
        <div className="rus-uzb">
          <span style={{ color: "gray" }}>RUS/</span>
          <span>UZB</span>
        </div>
      </header>

      {showCatalog && <HeaderCatalog onClose={handleCatalogClose} />}
    </>
  );
};

export default Header;
