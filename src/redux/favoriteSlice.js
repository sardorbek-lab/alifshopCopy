import { createSlice } from "@reduxjs/toolkit";

function showToast(message = "Mahsulot saralanganlarga qo‘shildi ✅") {
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




const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(action.payload);
        showToast()
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
