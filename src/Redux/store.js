import { createStoreHook } from "react-redux";
import { combineReducers  ,  } from "redux";
// import { rootReducer } from "./rootReducer";
// import { calculationsReducer } from "./reducer.Calculationsjs";
import { calculationsReducer } from "../Redux/rootReducer";

const rootReducer = combineReducers({
    calculations: calculationsReducer,
   });
   

const store = createStoreHook(rootReducer);

export default store;