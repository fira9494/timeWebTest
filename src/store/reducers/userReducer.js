import { EDIT_USER, INIT_USERS } from "../../utils/types";

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_USERS:
      return action.payload;

    case EDIT_USER:
      const index = state.findIndex(
        (el) => el.customer_id === action.payload.customer_id
      );
      state[index] = action.payload;
      return [...state];

    default:
      return state;
  }
};
