import React, { createContext, useReducer } from "react";


interface InputProviderProps {
    children: React.ReactNode;
}

type AppState = typeof initialState;
type Action = 
    | { type: "LOADING", payload: boolean }
    | { type: "SEARCH", payload: string };


    const initialState = {
        isLoading: false,
        searchWord: "",
    }

export const configContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>;
}>({state: initialState, dispatch: () => {}});


const configReducer = (state: AppState, action: Action) => {
    switch(action.type) {
        case "LOADING":
            return {...state, isLoading: action.payload};
        case "SEARCH":
            return {...state, searchWord: action.payload};
        default:
            return state
    }
}

const ConfigContextProvider = ({ children } : InputProviderProps) => {
    const [state, dispatch] = useReducer(configReducer, initialState);

    return (
        <configContext.Provider value={{state, dispatch}}>
            {children}
        </configContext.Provider>
    )
}

export default ConfigContextProvider;