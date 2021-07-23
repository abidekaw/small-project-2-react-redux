import { createStore } from "redux";
import rootReducers from "./reducers";

import { devToolsEnhancer } from "redux-devtools-extension";

export default createStore(rootReducers, devToolsEnhancer());
