import { takeLatest, put, all } from 'redux-saga/effects';
import { getQuestions } from '../core/questions';

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

function* watchGenerateQuestion() {
  const { GENERATE_QUESTION } = ACTIONS;
  yield takeLatest(GENERATE_QUESTION, generateQuestions);
}

export default function* questionSagas() {
  yield all([
    watchGenerateQuestion(),
  ]);
}
