import { createContext, useReducer } from 'react';
export const Store = createContext();
const initialState = {
    playing: {},
    userName: ""
};
function reducer(defaultState, action) {
    switch (action.type) {
        case "SET_PLAYING_SONG":
            defaultState.playing = action.payload;
            return { ...defaultState }

        case "SET_USER_NAME":
            defaultState.userName = action.payload;
            return { ...defaultState }
        default:
            return defaultState
    }
}
export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { userName: state.userName, playing: state.playing, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}