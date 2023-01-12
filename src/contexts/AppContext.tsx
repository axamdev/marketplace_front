import React, { createContext, useContext, useMemo, useReducer } from "react";

// =================================================================================
type initialState = {
  cart: CartItem[];
};

export type CartItem = {
  qty: number;
  name: string;
  price: number;
  imgUrl?: string;
  id: string | number;
  description: string;
};

type cartActionType = { type: "CHANGE_CART_AMOUNT"; payload: CartItem };
type ActionType = cartActionType;

// =================================================================================

const initialState = {
  cart: [
    // {
    //   price: 250,
    //   name: "Feuteuil salon",
    //   imgUrl: "/assets/images/Furniture Shop/Furniture.png",
    //   id: "7222243834583537",
    //   qty: 1,
    // },
    // {
    //   price: 250,
    //   name: "Canapé gris",
    //   imgUrl: "/assets/images/Furniture Shop/Furniture (1).png",
    //   id: "38553442244076086",
    //   qty: 1,
    // },
    // {
    //   price: 250,
    //   name: "Heavy 20kt Gold Necklace",
    //   imgUrl:
    //     "/assets/images/Furniture Shop/Furniture (2).png",
    //   id: "9573201630529315",
    //   qty: 1,
    // },
  ],
};

interface ContextProps {
  state: initialState;
  dispatch: (args: ActionType) => void;
}

const AppContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: initialState, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item.id !== cartItem.id);
        return { ...state, cart: filteredCart };
      }

      // IF PRODUCT ALREADY EXITS IN CART
      if (exist) {
        const newCart = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, qty: cartItem.qty } : item
        );

        return { ...state, cart: newCart };
      }

      return { ...state, cart: [...cartList, cartItem] };

    default: {
      return state;
    }
  }
};

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext<ContextProps>(AppContext);

export default AppContext;
