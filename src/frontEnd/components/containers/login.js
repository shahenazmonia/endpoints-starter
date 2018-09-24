import {connect} from 'react-redux';
import Login from '../login';
import {login} from '../../actions/login';

const mapStateToProps = ({userLogin})=>{
  return ({
    userLogin
  });
};

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
