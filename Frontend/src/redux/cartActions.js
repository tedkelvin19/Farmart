// cartActions.js

export const addToCart = (animal) => {
    return {
      type: 'ADD_TO_CART',
      payload: animal
    };
  };
  