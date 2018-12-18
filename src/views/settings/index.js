import { connect } from 'react-redux';
import Settings from './settings';
import { saveSettings, getSettings } from '../../actions';

const mapState = ({ settings }) => ({
  settings,
});

export default connect(mapState, {
  saveSettings,
  getSettings,
})(Settings);
