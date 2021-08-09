import { useReducer, createContext, useContext } from "react";

const initialState = {
  myCart: [],
  games: [],
  filtered: [],
  api_url: "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setInitial":
      return { ...state, games: action.payload, filtered: action.payload };
    case "addGame":
      return { ...state, myCart: [...state.myCart, action.payload] };
    case "removeGame":
      const remain = state.myCart.filter(
        (game) => game.gameID !== action.payload
      );
      console.log(remain)
      return { ...state, myCart: remain };
    case "setGames":
      return { ...state, games: action.payload };
    case "setFiltered":
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};

const AppState = createContext(initialState);

export const ProviderState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppState.Provider value={{ state, dispatch }}>
      {children}
    </AppState.Provider>
  );
};

export const useAppState = () => useContext(AppState);
