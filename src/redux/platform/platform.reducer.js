import { GET_JOBS_SUCCESS } from "./Dashboard.types";

const initialState = {
  jobs: [],
};

const PlatformReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: { ...action.payload.data, jobs: [...jobs, ...action.payload] },
      };
    default:
      return state;
  }
};

export default PlatformReducer;
