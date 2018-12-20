import { connect } from 'react-redux';
import { generateQuestion, submitAnswer } from '../../actions';
import Quiz from './quiz';

const mapState = ({ questions }) => ({
  questions,
});

export default connect(mapState, {
  generateQuestion,
  submitAnswer,
})(Quiz);
