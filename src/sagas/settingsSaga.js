import { takeLatest, put, all } from 'redux-saga/effects';
import { set } from '../utils/localStorage';

import { ACTIONS } from '../actions';


function* saveSettings(actions) {
  const { payload } = actions;
  yield set('QZ_s3tt91ng', payload);
  // todo redirect or display to show message
  yield put({
    type: 'test',
  });
}


function* watchSettings() {
  const { SAVE_SETTINGS } = ACTIONS;
  yield takeLatest(SAVE_SETTINGS, saveSettings);
}

export default function* settingSaga() {
  yield all([
    watchSettings(),
  ]);
}
