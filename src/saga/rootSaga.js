import { spawn } from "redux-saga/effects";
import PlatformSaga from "./platform.saga";

function* rootSaga() {
  yield spawn(PlatformSaga);
}

export default rootSaga;
