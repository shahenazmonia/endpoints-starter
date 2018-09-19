import Signup from '../signup';
import {fetchUser} from '../../actions/signup';
import {connect} from 'react-redux';

const mapStateToProps = ({user})=>{
  return ({
    user
  });
};

const mapDispatchToProps = {
  fetchUser
};

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
