import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import answerReducer from './answerReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  questions: questionReducer,
  answers: answerReducer,
  settings: settingsReducer,
});
