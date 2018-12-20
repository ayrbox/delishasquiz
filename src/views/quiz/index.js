import { connect } from 'react-redux';
import { generateQuestion, submitAnswer } from '../../actions';
import Quiz from './quiz';

const mapState = ({ settings, questions }) => ({
  questions,
  settings,
});

export default connect(mapState, {
  generateQuestion,
  submitAnswer,
})(Quiz);
