<<<<<<< HEAD
// cartReducer.js
=======
// cartReducers.js
>>>>>>> development

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
<<<<<<< HEAD
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
=======
>>>>>>> development
    default:
      return state;
  }
};

export default cartReducer;
<<<<<<< HEAD

// undo to here
=======
>>>>>>> development
