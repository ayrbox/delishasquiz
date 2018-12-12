import { all } from 'redux-saga/effects';
import questionSagas from './sagas/question';
import settingsSaga from './sagas/settingsSaga';

export default function* mySaga() {
  yield all([
    questionSagas(),
    settingsSaga(),
  ]);
}
