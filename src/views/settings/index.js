import { connect } from 'react-redux';
import Settings from './settings';
import { saveSettings, getSettings } from '../../actions';

const mapState = () => ({
  settings: {
    level: 10,
    questionsPerQuiz: 30,
    operators: ['ADDITION', 'DIVISION'],
  },
});

export default connect(mapState, {
  saveSettings,
  getSettings,
})(Settings);
