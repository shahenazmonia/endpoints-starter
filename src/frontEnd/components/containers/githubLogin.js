import login from '../login.js';
import {connect}from 'react-redux';
import {fetchUsers} from '../../actions/login';

// get state (reducers)
const mapStateToProps = ({user})=>{
  return  ({
    user
  });
};

// pass action to component
const mapDispatchToProps ={
  login,
};

export default connect(mapStateToProps,mapDispatchToProps)(login);
