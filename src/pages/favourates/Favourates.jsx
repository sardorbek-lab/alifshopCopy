import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/favoriteSlice';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import './Favouret.css';
import { addToCart } from "../../redux/cartSlice.js";


const Favourates = () => {
  const dispatch = useDispatch();
  const sevimlilar = useSelector((state) => state.favorites.items);

  const sevimliniOzgartir = (mahsulot) => {
    dispatch(toggleFavorite(mahsulot));
  };

  const sevimlimi = (id) => {
    return sevimlilar.some((sevimli) => sevimli.id === id);
  };

  if (sevimlilar.length === 0) {
    return (
      <div className="empty-cart">
        <h1 className="empty-h1">Saralanganlar hozircha bosh</h1>
        <p>Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan foydalaning</p>
        <Link to='/'>
          <button className="home-btn">
            Asosiy ekran
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px" }} className="sevimlilar-konteyner">
      <h1>Saralanganlar</h1>
      <div style={{ maxWidth: "1200px" }} className="setka-konteyner">
        {sevimlilar.map((mahsulot, indeks) => (
          <div key={indeks} className="karta">
            <Link to={`/SinglePage/${mahsulot.id}`}>
              <img src={mahsulot.img} alt={mahsulot.nomi} className="rasm" />
            </Link>
            <div className="kontent">
              <h2 className="matn-12px kulrang-700 qalin ikki-qator">{mahsulot.nomi}</h2>
              <div className="narx">
                <span className="chegirma">{mahsulot.chegirma_narxi}</span>
                <span className="asl-narx">{mahsulot.narx}</span>
              </div>
              <div className="chegirma-yorligi">-{mahsulot.chegirma_foizi}</div>
            </div>
            <button onClick={() => dispatch(addToCart(mahsulot))} className="savatga-tugma">
              <FaShoppingCart className="savatga-ikona" />
              <span>Savatga</span>
            </button>
            <button
              className={`yurak ${sevimlimi(mahsulot.id) ? 'faol' : ''}`}
              onClick={() => sevimliniOzgartir(mahsulot)}
            >
              {sevimlimi(mahsulot.id) ? <FaHeart className="matn-qizil-500" /> : <CiHeart />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourates;