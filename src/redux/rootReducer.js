import { combineReducers } from "redux";
import PlatformReducer from "./platform/platform.reducer";

const rootReducer = combineReducers({
  platform: PlatformReducer,
});

export default rootReducer;
