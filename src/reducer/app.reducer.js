import { constants } from "../constants";

const initialState = {
  isSidebarCollapsed: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SIDEBAR_STATUS:
      return {
        ...state,
        isSidebarCollapsed: action.payload,
      };
    default:
      return state;
  }
};
