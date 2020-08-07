import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

function* helloWorldGenerator() {
  yield "hello";
  // return;
  yield "world";
  return "ending";
}

var hw = helloWorldGenerator();

//执行
console.log(hw.next());//hello，false代表没有结束
console.log(hw.next());//world
console.log(hw.next());//ending，true代表结束
// console.log(hw.next());//undefine
