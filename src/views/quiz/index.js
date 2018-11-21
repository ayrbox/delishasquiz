import { connect } from 'react-redux';
import { generateQuestion } from '../../actions';
import Quiz from './quiz';

const mapState = state => ({
  questions: state.questions,
});

export default connect(mapState, {
  generateQuestion,
})(Quiz);
