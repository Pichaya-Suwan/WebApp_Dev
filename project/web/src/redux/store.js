import cartReducer from "./reducers/cartReducer";

import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
});

const configureStore = createStore(rootReducer);

export default configureStore;
