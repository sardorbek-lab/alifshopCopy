import bannerData, { apple, barcha, bepul, elektra, noutbuklar, qurilish, radar } from "../../mock/bannerData.js"
import "./Banner.css"
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { toggleFavorite } from "../../redux/favoriteSlice.js";
import { FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { sizniqiziq } from "../../mock/bannerData.js";
import { honor } from "../../mock/bannerData.js";
import { smartfonlar } from "../../mock/bannerData.js";
import { bosch } from "../../mock/bannerData.js";
import { genau } from "../../mock/bannerData.js";
import { xiomi } from "../../mock/bannerData.js";
import { sokany } from "../../mock/bannerData.js";
import { parfumeriya } from "../../mock/bannerData.js";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice.js";

const Banner = () => {



  const dispatch = useDispatch();
  const sevimlilar = useSelector((state) => state.favorites.items);

  const sevimliniOzgartir = (mahsulot) => {
    dispatch(toggleFavorite(mahsulot));
  };

  const sevimlimi = (id) => {
    return sevimlilar.some((sevimli) => sevimli.id === id);
  };


  const dispatch2 = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const renderKartalar = (malumotlar, sarlavha) => (
    <div style={{ marginTop: '-20px' }} className="asosiy-konteyner">
      <div className="matn">
        <h1>{sarlavha}</h1>
        <p>
          Hammasini ko'rish <FaAngleRight />
        </p>
      </div>
      <div className="setka-konteyner">
        {malumotlar.map((mahsulot, indeks) => (
          <div key={indeks} className="karta">
            <Link to={`/SinglePage/${mahsulot.id}`}>
              <img height={180} src={mahsulot.img} alt={mahsulot.nomi} className="rasm" />
            </Link>
            <div className="kontent">
              <h2 className="matn-12px kulrang-700 qalin ikki-qator">{mahsulot.nomi}</h2>
              <div className="narx">
                <span className="chegirma">{mahsulot.chegirma_narxi} </span>
                <span className="asl-narx">{mahsulot.narx} </span>
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



  return (
    <div className="banner-kartalar">
      {renderKartalar(bannerData, "Chegirmalar")}
      {renderKartalar(sizniqiziq, "Sizni qiziqtirishi mumkin")}
      {renderKartalar(honor, "Honor smartfonlariga chegirmalar")}
      {renderKartalar(smartfonlar, "Realme smartfonlariga chegirmalar")}
      {renderKartalar(bosch, "Honor smartfonlariga chegirmalar")}
      {renderKartalar(genau, "Genau — sizning eng samarali mashg‘ulotlaringiz uchun")}
      {renderKartalar(xiomi, "Xiaomi'dan aqlli texnika")}
      {renderKartalar(sokany, "Sokany - Hammasi qulayligingiz uchun")}
      {renderKartalar(parfumeriya, "Parfyumeriya")}
      {renderKartalar(radar, "Avtotovarlar")}
      {renderKartalar(elektra, "BYD muddatli to'lovga")}
      {renderKartalar(apple, "Apple mahsulotlari 🍎")}
      {renderKartalar(bepul, "Bepul o'rnatib berish")}
      {renderKartalar(noutbuklar, "Noutbuklar")}
      {renderKartalar(qurilish, "Qurilish uchun asbob-uskunalar")}
      {renderKartalar(barcha, "Barchasi yangi uy uchun")}
     

    </div>

  )
}

export default Banner
