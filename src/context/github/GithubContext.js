import { useReducer, createContext } from "react";
import { createRenderer } from "react-dom/test-utils";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
