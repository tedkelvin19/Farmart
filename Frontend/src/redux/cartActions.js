// cartActions.js
<<<<<<< HEAD
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (animal) => {
  return {
    type: ADD_TO_CART,
    payload: animal,
  };
};

export const removeFromCart = (animalId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: animalId,
  };
};

// undo to here
=======

export const addToCart = (animal) => {
    return {
      type: 'ADD_TO_CART',
      payload: animal
    };
  };
  
>>>>>>> development
