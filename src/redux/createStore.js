import {createStore} from "redux/index";
import {myReducer} from "./reducers/myReducer";

export const Cstore = createStore(
    myReducer,
    // playlist,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
