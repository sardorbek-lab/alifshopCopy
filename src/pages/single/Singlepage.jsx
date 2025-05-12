import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../redux/favoriteSlice'
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa'
import s from "../../assets/Annotation 2025-05-08 222008.png"
import './Singlepage.css'
import { addToCart } from "../../redux/cartSlice.js";


import bannerData, { apple, barcha, bepul, elektra, noutbuklar, qurilish, radar, sizniqiziq, honor, smartfonlar, bosch, genau, xiomi, sokany, parfumeriya } from "../../mock/bannerData.js";

const Singlepage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sevimlilar = useSelector(state => state.favorites.items);
  const [quantity, setQuantity] = useState(1);

  const allData = [
    ...bannerData,
    ...apple,
    ...barcha,
    ...bepul,
    ...elektra,
    ...noutbuklar,
    ...qurilish,
    ...radar,
    ...sizniqiziq,
    ...honor,
    ...smartfonlar,
    ...bosch,
    ...genau,
    ...xiomi,
    ...sokany,
    ...parfumeriya,
  ];

  const mahsulot = allData.find(item => item.id === parseInt(id));

  const sevimlimi = (id) => {
    return sevimlilar.some(item => item.id === id);
  };

  const sevimliniOzgartir = (item) => {
    dispatch(toggleFavorite(item));
  };

  return (
    <div className="singlepage-container">

      <div className="left-images">
        <div className="small-images">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="small-image-box">
              <img src={mahsulot.img} alt="product" />
            </div>
          ))}
        </div>

        <div className="main-image">
          <img src={mahsulot.img} alt={mahsulot.nomi} />
        </div>
      </div>

      <div className="right-details">

        <div className="rating">
          <div className="stars">
            {Array(5).fill().map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
          </div>
          <div className="reviews">1 Sharh</div>
        </div>

        <div className="discount">-{mahsulot.chegirma_foizi}</div>

        <h1 className="product-name">{mahsulot.nomi}</h1>

        <div className="all-product-times">
          <div className="product-time">
            <div className="installment-text">Muddati to’lovga sotib olish</div>
            <div className="installment-price">1 289 896 so'm/oyiga</div>
          </div>

          <div className="prices">
            <div className="installment-text">Narx</div>
            <span className="new-price">{mahsulot.chegirma_narxi} so'm</span>
            <span className="old-price">{mahsulot.narx} so'm</span>
          </div>
        </div>

        <div className="months">
          <button className="month-button">3</button>
          <button className="month-button">6</button>
          <button className="month-button">12</button>
          <button className="month-button">18</button>
          <button style={{ background: "#f4c63a" }} className="month-button actives">24 oyiga</button>
        </div>

        <button className="limit-button">
          <div className="limit-text">
            <span>Akauntingizga kiring</span>
            <span>Limitingizni bilib oling</span>
          </div>
          <img width={103} src={s} alt="" />
        </button>

        <div className="cart-controls">
          <div className="quantity-controls">
            <button onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>

          <button onClick={() => dispatch(addToCart(mahsulot))} className="add-to-cart">
            Savatga o'tish
          </button>

          <button className="favorite-button" onClick={() => sevimliniOzgartir(mahsulot)}>
            {sevimlimi(mahsulot.id) ? <FaHeart className="heart-icon-filled" /> : <FaRegHeart className="heart-icon" />}
          </button>
        </div>

      </div>

    </div>
  )
}

export default Singlepage;
