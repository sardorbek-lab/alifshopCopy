import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaLink, FaTrashAlt, FaCheckSquare } from "react-icons/fa";
import "./Savat.css";

const Savat = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.chegirma_narxi.replace(' so\'m', '').replace(/\s/g, ''));
    const quantity = item.quantity || 0;
    if (isNaN(price)) return sum;
    return sum + (price * quantity);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1 className="empty-h1">Savat hozircha bosh</h1>
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
    <div className="cart-page">
      <div className="cart-header">
        <div className="header-left">
          <h2>Savat </h2>
          <p>{cartItems.length} ta tovar</p>
        </div>

        <div className="cart-actions">
          <Link style={{ color: "#999" }} to="#" className="action-link">
            <span>Ulanish</span>  <FaLink />
          </Link>

          <button style={{ color: "#999" }} className="action-link delete-selected">
            <span>Tanlanganlarni o'chirish</span>    <FaTrashAlt />
          </button>

          <label style={{ color: "#999" }} className="action-link select-all">
            <input type="checkbox" />
            <span>Hammasini tanlash</span>
          </label>
        </div>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.nomi} className="item-image" />
              <div className="item-details">
                <h4 className="item-name">{item.nomi}</h4>

                <div className="extra-info">
                  <p><b>Narx:</b> {item.chegirma_narxi}</p>
                  <p><b>Sotuvchi:</b> JOYBOX</p>
                  <p>Toshkent bo'ylab 1 kundan boshlab. O'zbekiston bo'ylab 3 kundan boshlab.</p>
                </div>

                <div className="price-section">
                  <span className="discounted-price">{item.chegirma_narxi}</span>
                  <span className="original-price">{item.narx}</span>
                </div>

                <div className="quantity-control">
                  <button onClick={() => dispatch(decrementQuantity(item.id))} className="quantity-btn">-</button>
                  <span className="quantity-count">{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))} className="quantity-btn">+</button>
                </div>

                <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">
                  <FaTrashAlt size={18} color="#888" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-item">
            <span>Umumiy narx:</span>
            <span>{totalPrice.toLocaleString()} so'm</span>
          </div>
          <div className="summary-item">
            <span>Yetkazib berish:</span>
            <span style={{ color: "#35ff1f" }}>Bepul</span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Jami:</span>
            <span>{totalPrice.toLocaleString()} so'm</span>
          </div>
          <button className=" checkout-btn">Rasmiylashtirmoq</button>
        </div>
      </div>
    </div>
  );
};

export default Savat;
