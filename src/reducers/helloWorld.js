import { RECEIVE_HELLO_WORLD } from "../actions";

export default (state = "", { type, payload }) => {
  switch (type) {
    case RECEIVE_HELLO_WORLD:
      return payload.text;
    default:
      return state;
  }
};
