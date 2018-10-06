const GENERATE_QUESTION = 'GENERATE_QUESTION';
const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

const CHECK_ANSWER = 'CHECK_ANSWER';
const RECEIVE_RESULT = 'RECEIVE_RESULT';

export const ACTIONS = {
  GENERATE_QUESTION,
  RECEIVE_QUESTION,
  CHECK_ANSWER,
  RECEIVE_RESULT,
};

export const generateQuestion = () => ({ type: GENERATE_QUESTION });

export const receiveQuestion = payload => ({
  type: RECEIVE_QUESTION,
  payload,
});

export const checkAnswer = payload => ({
  type: CHECK_ANSWER,
  payload,
});

export const receiveResult = payload => ({
  type: RECEIVE_RESULT,
  payload,
});
