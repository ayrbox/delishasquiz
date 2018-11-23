import { ACTIONS } from '../actions';

const initialState = [];
export default (state = initialState, { type, payload }) => {
  const { SUBMIT_ANSWER_SUCCESS, SUBMIT_ANSWER_FAIL } = ACTIONS;
  switch (type) {
    case SUBMIT_ANSWER_SUCCESS:
      return [
        ...state,
        payload,
      ];
    case SUBMIT_ANSWER_FAIL:
      return state;
    default:
      return state;
  }
};
