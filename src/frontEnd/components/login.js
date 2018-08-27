import React, {Component} from 'react';
import ReactDom from 'react-dom';
import GitHubLogin from 'react-github-login';
class Login extends Component{


  render(){
    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);

    return(
      <GitHubLogin clientId="6fc655aefb6a09d3c643"
        onSuccess={onSuccess}
        onFailure={onFailure}/>
    );


  }

}

export default Login;
