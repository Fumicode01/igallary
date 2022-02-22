import React, { createContext, useReducer } from "react";


interface InputProviderProps {
    children: React.ReactNode;
}

type AppState = typeof initialState;
type Action =  { type: "SEARCH", payload: string };


    const initialState = {
        searchWord: "",
        page:1,
        // totalPages:0,
    }

export const appContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>;
}>({state: initialState, dispatch: () => {}});


const appReducer = (state: AppState, action: Action) => {
    switch(action.type) {
        case "SEARCH":
            return {...state, searchWord: action.payload};
        // case "TOTALPAGE":
        //     return {...state, totalPages: action.payload};
        default:
            return state
    }
}

const AppContextProvider = ({ children } : InputProviderProps) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <appContext.Provider value={{state, dispatch}}>
            {children}
        </appContext.Provider>
    )
}

export default AppContextProvider;