import { ACTIONS } from '../actions';
import { DEFAULT_SETTINGS } from '../constants';

const initialState = DEFAULT_SETTINGS;

export default (state = initialState, { type, payload }) => {
  const { GET_SETTINGS_SUCCESS, SAVE_SETTINGS_SUCCESS } = ACTIONS;
  switch (type) {
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case SAVE_SETTINGS_SUCCESS:
      return {
        ...state,
        message: 'Saved successfully',
      };
    default:
      return {
        ...state,
        message: undefined,
      };
  }
};
