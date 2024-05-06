// actions/cartActions.js
const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemId,
  };
};

export { addToCart, removeFromCart };
