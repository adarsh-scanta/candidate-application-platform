import {
  GET_JOBS,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAILURE,
} from "../redux/platform/platform.types";
import { getJobs } from "../api/getJobs.api";


function* fetchJobs(action) {
    const response = yield getJobs(action);
    if (response) {
      if (response.status >= 200 && response.status < 300) {
        yield put({
          type: GET_JOBS_SUCCESS,
          payload: response.data,
        });
      } else {
        yield put({
          type: GET_JOBS_FAILURE,
          payload: response.data,
        });
      }
    } else {
      yield put({
        type: GET_JOBS_FAILURE,
        payload: {},
      });
    }
  }

function* PlatformSaga() {
  yield takeLatest(GET_JOBS, fetchJobs);
}

export default PlatformSaga;
