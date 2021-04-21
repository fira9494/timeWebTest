import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const user = JSON.parse(localStorage.getItem('user'))

const preloadState = {
    user: user || null
}

export const store = createStore(
    rootReducer, preloadState, composeWithDevTools(applyMiddleware())
)

store.subscribe(() => {
    localStorage.setItem('users', JSON.stringify(store.getState().user))
})

