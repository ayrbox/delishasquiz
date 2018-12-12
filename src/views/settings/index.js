import { connect } from 'react-redux';
import Settings from './settings';
import { saveSettings } from '../../actions';

const mapState = () => ({
  settings: {
    level: 10,
    questionsPerQuiz: 30,
    operators: ['ADDITION', 'DIVISION'],
  },
});

export default connect(mapState, {
  saveSettings,
})(Settings);
