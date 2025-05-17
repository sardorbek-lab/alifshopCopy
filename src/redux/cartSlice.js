import { createSlice } from "@reduxjs/toolkit";


function showToast(message = "Mahsulot savatga qo‘shildi ✅") {
  const toast = document.createElement("div");
  toast.textContent = message;

  toast.style.position = "fixed";
  toast.style.top = "30px";
  toast.style.right = "-300px";
  toast.style.backgroundColor = "#4CAF50";
  toast.style.color = "white";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "8px";
  toast.style.fontSize = "16px";
  toast.style.zIndex = "1000";
  toast.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
  toast.style.opacity = "0";
  toast.style.transition = "right 0.5s ease, opacity 0.5s ease";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.right = "30px"; 
    toast.style.opacity = "1";
  }, 10);
  setTimeout(() => {
    toast.style.right = "-300px";
    toast.style.opacity = "0";

    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 2000);
}

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
        showToast();
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
