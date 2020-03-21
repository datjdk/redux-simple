import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../midleware/index";

const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware)
);

export default store;
