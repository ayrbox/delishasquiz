import { ACTIONS } from '../actions';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  const { SUBMIT_ANSWER_SUCCESS, SUBMIT_ANSWER_FAIL, CLEAR_ANSWER } = ACTIONS;
  switch (type) {
    case SUBMIT_ANSWER_SUCCESS:
      return [
        ...state,
        payload,
      ];
    case SUBMIT_ANSWER_FAIL:
      return state;
    case CLEAR_ANSWER:
      return initialState;
    default:
      return state;
  }
};
