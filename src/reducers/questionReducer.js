import { ACTIONS } from '../actions';

const initialState = {};
export default (state = initialState, { type, payload }) => {
  const { RECEIVE_QUESTION } = ACTIONS;
  switch (type) {
    case RECEIVE_QUESTION:
      return payload;
    default:
      return state;
  }
};
