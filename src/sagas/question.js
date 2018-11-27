import { takeLatest, put, all } from 'redux-saga/effects';
import { getQuestions, getAnswer } from '../core/questions';

import {
  ACTIONS,
  // receiveQuestion,
  // checkAnswer,
  // receiveResult
} from '../actions';

function* generateQuestions() {
  const { RECEIVE_QUESTION } = ACTIONS;
  const q = yield getQuestions(20);
  yield put({
    type: RECEIVE_QUESTION,
    payload: q,
  });
}

function* submitAnswer(action) {
  const { SUBMIT_ANSWER_SUCCESS, SUBMIT_ANSWER_FAIL } = ACTIONS;
  try {
    const { question, answer } = action.payload;
    const correctAnswer = yield getAnswer(question);
    yield put({
      type: SUBMIT_ANSWER_SUCCESS,
      payload: {
        ...question,
        correctAnswer,
        answer,
        correct: correctAnswer === answer,
      },
    });
  } catch (e) {
    yield put({
      type: SUBMIT_ANSWER_FAIL,
    });
  }
}

function* watchGenerateQuestion() {
  const { GENERATE_QUESTION, SUBMIT_ANSWER } = ACTIONS;
  yield takeLatest(GENERATE_QUESTION, generateQuestions);
  yield takeLatest(SUBMIT_ANSWER, submitAnswer);
}

export default function* questionSagas() {
  yield all([
    watchGenerateQuestion(),
  ]);
}
