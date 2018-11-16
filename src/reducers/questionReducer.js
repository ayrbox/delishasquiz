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

/*
  // IDEA: Game starts

  1. Generate Number of question defined in settings with max number (or level * 10)
  2. Dispatct GENERATE_QUESTION  (an API call if server side questions)
  3. Reduce GENERATE_QUESTION_SUCCESS
  4. Redux state with list of questions and starting Index
  5. Dispatch action SUBMIT Answer with answer payload
  6. Saga checks the answers and reduce answer received
  7. Reduce ANswer check and question index++
  8. Answer received is last one... then saves data and redirect to different UI
*/
