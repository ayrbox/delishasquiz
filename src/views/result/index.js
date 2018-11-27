import { connect } from 'react-redux';
import Result from './Result';

const mapState = state => ({
  result: state.answers,
});

export default connect(mapState)(Result);
