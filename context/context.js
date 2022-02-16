import React, { createContext, useReducer } from "react";

export const configContext = createContext();

const configReducer = (state, action) => {
    switch(action.type) {
        case "LOADING":
            return {...state, isLoading: action.payload};
        case "SEARCH":
            return {...state, searchWord: action.payload};
        default:
            return state
    }
}

const ConfigContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(configReducer, {
        isLoading: false,
        searchWord: "",
    })

    return (
        <configContext.Provider value={{state, dispatch}}>
            {children}
        </configContext.Provider>
    )
}

export default ConfigContextProvider;