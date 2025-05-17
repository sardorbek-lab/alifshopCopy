import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Annotation 2025-04-30 082137.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import HeaderCatalog from "../headerCatalog/HeaderCatalog";
import { search } from "../../mock/bannerData";
const mockProducts = search;

const Header = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleCatalogOpen = () => setShowCatalog(true);
  const handleCatalogClose = () => setShowCatalog(false);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = mockProducts.filter(
      (product) =>
        (product.nomi && product.nomi.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.xususiyatlar &&
          product.xususiyatlar.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setSearchResults(results);
    setShowResults(true);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
    } else {
      const results = mockProducts.filter(
        (product) =>
          (product.nomi && product.nomi.toLowerCase().includes(query.toLowerCase())) ||
          (product.xususiyatlar && product.xususiyatlar.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(results);
      setShowResults(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
    if (e.key === "Escape") {
      setShowResults(false);
    }
  };

  const handleClickOutside = () => {
    setTimeout(() => setShowResults(false), 200);
  };

  return (
    <>
      <header>
        <div className="header-left">
          <Link to="/">
            <img height={47} width={147} src={logo} alt="alif shop logo" />
          </Link>
        </div>

        <button className="catalog-btn" onClick={handleCatalogOpen}>
          <span className="calalog-span1">&#9776;</span>
          <span className="calalog-span2">Tovarlar katalogi</span>
        </button>

        <div className="search-area">
          <div className="search-box">
            <input
              type="text"
              placeholder="Tovarlarni izlash"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={handleClickOutside}
            />
            <button onClick={handleSearch}>
              <FaMagnifyingGlass />
            </button>
          </div>

          {showResults && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((product) => (
                    <li key={product.id} className="search-item">
                      <Link to={`/singlepage/${product.id}`}>
                        <img src={product.img} alt={product.nomi} width={40} height={40} />
                        <div>
                          <p>{product.nomi}</p>
                          <small>{product.xususiyatlar}</small>
                        </div>
                        <span>{product.narx}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-results">Hech narsa topilmadi</p>
              )}
            </div>
          )}
        </div>

        <div className="header-links">
          <div className="cart-box">
            <Link to="/savat">
              <GrCart />
              <span style={{ color: "gray" }}>Savat</span>
            </Link>
          </div>
          <div className="cart-box">
            <Link to="/favourates">
              <FaRegHeart />
              <span style={{ color: "gray" }}>Saralanganlar</span>
            </Link>
          </div>
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
