import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySaga from "./mySaga";

const sagaMiddleware = createSagaMiddleware();

const loginInfo = {
  isLogin: false,
  loading: false,
  userName: ""
};

function loginReducer(state = { ...loginInfo }, action) {
  // console.log("action", action.payload);
  switch (action.type) {
    case "loginRequest":
      return { ...state, ...loginInfo, loading: true };
    case "loginSuccess":
      return { ...state, isLogin: true, loading: false, ...action.payload };
    case "loginFailure":
      return { ...state, ...loginInfo, ...action.payload };
    default:
      return state;
  }
}

const store = createStore(loginReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;
