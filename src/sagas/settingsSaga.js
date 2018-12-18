import { takeLatest, put, all } from 'redux-saga/effects';
import { get, set } from '../utils/localStorage';

import { ACTIONS } from '../actions';

const SETTING_KEY = 'QZ_s3tt91ng';


function* saveSettings(actions) {
  const { payload } = actions;
  yield set(SETTING_KEY, payload);
  // todo redirect or display to show message
  yield put({
    type: 'test',
  });
}

function* getSettings(actions) {
  const settings = yield get(SETTING_KEY);
  yield console.log('terotauio action', actions, settings);
}


function* watchSettings() {
  const { SAVE_SETTINGS, GET_SETTINGS } = ACTIONS;
  yield takeLatest(SAVE_SETTINGS, saveSettings);
  yield takeLatest(GET_SETTINGS, getSettings);
}


export default function* settingSaga() {
  yield all([
    watchSettings(),
  ]);
}
