import React, { useContext, useReducer, createContext } from 'react';

// Create context for cart state and cart dispatch
const cartStateContext = createContext();
const cartDispatchContext = createContext();

// Define your reducer function to handle cart actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // Implement logic to add an item to the cart
      return [...state, {
        id: action.id,
        name: action.name,
        qnt: action.qnt,
        size: action.size,
        price: action.price,
        img: action.img,

      }];
    // case 'REMOVE_FROM_CART':
    //   // Implement logic to remove an item from the cart
    //   return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    // // Add more cases for other actions as needed

    case "REMOVE":
      let newArr = [...state]
      newArr.splice(action.index, 1)
      return newArr;

    // case "UPDATE":
    //   let arr = [...state]
    //   arr.find((food , index)=>{

    //     if(food.id === action.id)
    //     {
    //       arr[index] = {...food , qnt:parseInt(action.qnt) + food.qnt , price:action.price + food.price}
    //     }
    //     return arr
    //   })
    //   return arr

    // ...

    case "UPDATE":
      console.log("Current state:", state);
      console.log("Action:", action);

      let arr = state.map((food) => {
        if (food.id === action.id) {
          return {
            ...food,
            qnt: parseInt(action.qnt) + food.qnt,
            price: action.price + food.price,
          };
        }
        return food;
      });

      console.log("Updated state:", arr);

      return arr;

    // ...

    case "DROP":
      let empArray = []
      return empArray 

    default:
      return state;
  }
};

// Create a CartProvider component to wrap your app with cart context
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <cartDispatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDispatchContext.Provider>
  );
};

// Custom hook to access cart state
export const useCart = () => useContext(cartStateContext);

// Custom hook to access cart dispatch
export const useDispatchCart = () => useContext(cartDispatchContext);
