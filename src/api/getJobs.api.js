import { toast } from "react-toastify";
import api from "../axiosConfig";
import { SessionOut } from "../../utilities/dashboardUtils";

export function* getJobs(action) {
  let resp;
  yield api
    .post(`/getSampleJdJSON`, action.payload, {
      timeout: 500000,
    //   headers: {
    //     "Access-Control-Allow-Headers": "x-access-token",
    //     "x-access-token": localStorage.getItem("auth-token"),
    //   },
    })
    .then((response) => {
      if (response.status === 404) {
        toast.error("Data not found");
      } else if (response.status === 400) {
        SessionOut();
      } else {
        resp = response;
      }
    })
    .catch((error) => {
      // toast.error("Data not found");
      return error;
    });
  return resp;
}