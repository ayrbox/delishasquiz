import { connect } from 'react-redux';
import { generateQuestion } from '../../actions';
import Quiz from './quiz';

export default connect(null, {
  generateQuestion,
})(Quiz);
