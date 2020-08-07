import { call, put, takeEvery } from "redux-saga/effects";

// 模拟登录接口
const UserService = {
  login(userName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userName === "小明") {
          resolve({ userName: "小明" });
        } else {
          reject({ err: "用户名或密码错误" });
        }
      }, 1000);
    });
  }
};

//worker saga
function* loginHandle(action) {
  yield put({
    type: "loginRequest"
  });
  try {
    //登录
    const res = yield call(UserService.login, action.payload.userName);
    yield put({
      type: "loginSuccess",
      payload: { ...res }
    });
  } catch (err) {
    yield put({
      type: "loginFailure",
      payload: { ...err }
    });
  }
}

//watcher saga

function* mySaga() {
  yield takeEvery("login", loginHandle);
}

export default mySaga;
