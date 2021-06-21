import { constants } from "../constants";

export const setSideBarStatus = (payload) => {
  return {
    type: constants.SET_SIDEBAR_STATUS,
    payload,
  };
};
