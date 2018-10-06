import { all } from 'redux-saga/effects';
import questionSagas from './sagas/question';

export default function* mySaga() {
  yield all([questionSagas()]);
}
