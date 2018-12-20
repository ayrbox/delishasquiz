import { OPERATORS } from './core/questions';

export const SETTING_KEY = 'QZ_s3tt91ng';
export const DEFAULT_SETTINGS = {
  level: 1,
  operatorSettings: Object.keys(OPERATORS).map(key => ({
    key,
    description: OPERATORS[key],
    selected: true,
  })),
  questionsPerQuiz: 10,
  message: undefined,
};

export default {
  SETTING_KEY,
  DEFAULT_SETTINGS,
};
