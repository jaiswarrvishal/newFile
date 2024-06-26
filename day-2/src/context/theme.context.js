import { createContext, useReducer } from "react";

export const themeContext = createContext();

function Reducer(state, action) {
    switch (action.type){
        case "DARK":
            return {...state, theme: "dark"}
        case "LIGHT":
            return {...state, theme: "light"}
        default:
            return state;
    }
}
const initialState = {theme: "light"};
// const initialState = {theme: "dark"};


function ThemeContextProvider({children}){
    const [themeState, dispatch] = useReducer(Reducer, initialState);

    return(
        <themeContext.Provider value = {{themeState, dispatch}}>
            {children}
        </themeContext.Provider>
    );
}
export default ThemeContextProvider;
