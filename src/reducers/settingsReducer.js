import { ACTIONS } from '../actions';
import { OPERATORS } from '../core/questions';

const initialState = {
  level: 1,
  operatorSettings: Object.keys(OPERATORS).map(key => ({
    key,
    description: OPERATORS[key],
    selected: true,
  })),
  questionsPerQuiz: 10,
};

export default (state = initialState, { type, payload }) => {
  const { GET_SETTINGS_SUCCESS } = ACTIONS;
  switch (type) {
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
