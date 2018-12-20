import { takeLatest, put, all } from 'redux-saga/effects';
import { get, set } from '../utils/localStorage';
import { ACTIONS } from '../actions';
import { SETTING_KEY } from '../constants';


function* saveSettings(actions) {
  const { payload } = actions;
  yield set(SETTING_KEY, payload);

  const { SAVE_SETTINGS_SUCCESS } = ACTIONS;
  yield put({
    type: SAVE_SETTINGS_SUCCESS,
  });
}

function* getSettings() {
  const settings = yield get(SETTING_KEY);

  const { GET_SETTINGS_SUCCESS } = ACTIONS;
  yield put({
    type: GET_SETTINGS_SUCCESS,
    payload: settings,
  });
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
