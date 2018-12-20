const GENERATE_QUESTION = 'GENERATE_QUESTION';
const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
const SUBMIT_ANSWER_FAIL = 'SUBMIT_ANSWER_FAIL';
const RECEIVE_RESULT = 'RECEIVE_RESULT';

const SAVE_SETTINGS = 'SAVE_SETTINGS';
const SAVE_SETTINGS_SUCCESS = 'SAVE_SETTINGS_SUCCESS';
const GET_SETTINGS = 'GET_SETTINGS';
const GET_SETTINGS_SUCCESS = 'GET_SETTINGS_SUCCESS';

export const ACTIONS = {
  GENERATE_QUESTION,
  RECEIVE_QUESTION,
  SUBMIT_ANSWER,
  RECEIVE_RESULT,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_FAIL,
  SAVE_SETTINGS,
  SAVE_SETTINGS_SUCCESS,
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS,
};

export const generateQuestion = payload => ({
  type: GENERATE_QUESTION,
  payload,
});

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


export const saveSettings = payload => ({
  type: SAVE_SETTINGS,
  payload,
});


export const getSettings = () => ({
  type: GET_SETTINGS,
});


export const getSettingSuccess = payload => ({
  type: GET_SETTINGS_SUCCESS,
  payload,
});
