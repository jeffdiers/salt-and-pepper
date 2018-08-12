import { connect } from 'react-redux';
import home from './home';

import { 
  // fetchEntriesPending, 
  // fetchEntriesFailure, 
  fetchEntriesSuccess, 
} from '../../actions/actionCreators'

function mapStateToProps(state) {
    return {
        entries: state.entries
    }
}

function mapDispatchToProps(dispatch) {
  return {
      fetchEntries: () => {
          dispatch(fetchEntriesSuccess())
      }
  }
}

const homeContainer = connect(mapStateToProps, mapDispatchToProps)(home);

export default homeContainer;


