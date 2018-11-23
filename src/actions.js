const GENERATE_QUESTION = 'GENERATE_QUESTION';
const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

const SUBMIT_ANSWER = 'CHECK_ANSWER';
const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
const SUBMIT_ANSWER_FAIL = 'SUBMIT_ANSWER_FAIL';
const RECEIVE_RESULT = 'RECEIVE_RESULT';

export const ACTIONS = {
  GENERATE_QUESTION,
  RECEIVE_QUESTION,
  SUBMIT_ANSWER,
  RECEIVE_RESULT,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_FAIL,
};

export const generateQuestion = () => ({ type: GENERATE_QUESTION });

export const receiveQuestion = payload => ({
  type: RECEIVE_QUESTION,
  payload,
});

export const submitAnswer = payload => ({
  type: SUBMIT_ANSWER,
  payload,
});

export const receiveResult = payload => ({
  type: RECEIVE_RESULT,
  payload,
});
