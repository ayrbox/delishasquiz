import { takeLatest, put } from "redux-saga/effects";
import { createQuestion } from "../core/questions";

import {
  ACTIONS,
  receiveQuestion,
  checkAnswer,
  receiveResult
} from "../actions";
import { all } from "redux-saga/effects";

function* generateNewQuestion() {
  const { RECEIVE_QUESTION } = ACTIONS;
  const q = createQuestion();
  yield put({
    type: RECEIVE_QUESTION,
    payload: q
  });
}

function* watchGenerateQuestion() {
  const { GENERATE_QUESTION } = ACTIONS;
  yield takeLatest(GENERATE_QUESTION, generateNewQuestion);
}

export default function* questionSagas() {
  yield all([watchGenerateQuestion()]);
}
