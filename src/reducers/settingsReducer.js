import { ACTIONS } from '../actions';
import { OPERATORS } from '../../core/questions';

    // const operatorSettings = Object.keys(OPERATORS).map(operatorKey => ({
    //   key: operatorKey,
    //   description: OPERATORS[operatorKey],
    //   selected: operators.includes(operatorKey),
    // }));


const initialState = {
  level: '300',
  operatorSettings: Object.keys(OPERATORS).map(key => ({
    key,
    description: OPERATORS[operatorKey],
    selected: true,
  }),
  questionsPerQuiz: 50,
};

export default (state = initialState, { type, payload }) => {
  const { GET_SETTINGS_SUCCESS } = ACTIONS;
  switch (type) {
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};
