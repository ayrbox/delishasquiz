import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import answerReducer from './answerReducer';

export default combineReducers({
  questions: questionReducer,
  answers: answerReducer,
});
