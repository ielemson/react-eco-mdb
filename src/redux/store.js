//importing the
import { createStore, applyMiddleware } from "redux";

//importing the middleware which is also known as logger:this will
// help to catch dispatched/user action and spread it to our reducers.
import logger from "redux-logger";

//importing our root reducer files
import rootReducer from "./root-reducer";
//assign our middleware to the logger array
const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));
//the store has been exported and will be included in our inde.js file
export default store;
