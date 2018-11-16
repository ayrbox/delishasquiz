import { takeLatest, put, all } from 'redux-saga/effects';
import { getQuestion } from '../core/questions';

import {
  ACTIONS,
  // receiveQuestion,
  // checkAnswer,
  // receiveResult
} from '../actions';

function* generateNewQuestion() {
  const { RECEIVE_QUESTION } = ACTIONS;
  const q = getQuestion();
  yield put({
    type: RECEIVE_QUESTION,
    payload: q,
  });
}

function* watchGenerateQuestion() {
  const { GENERATE_QUESTION } = ACTIONS;
  yield takeLatest(GENERATE_QUESTION, generateNewQuestion);
}

export default function* questionSagas() {
  yield all([watchGenerateQuestion()]);
}
