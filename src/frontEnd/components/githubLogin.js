import React, {Component} from 'react';
import ReactDom from 'react-dom';
import GitHubLogin from 'react-github-login';
const Login =(props) => {

  console.log(props);
  const responseGoogle = (response) => {
    props.login({
      accessToken:JSON.parse(response)['access_token'],
    });

  };
    // const {fetchUsers} = this.props;
    // if(fetchUsers.isFetching && fetchUsers.length!= 0)
    // {
    //   fetchUsers();
    // }
  const onSuccess = response => console.log(response);
  const onFailure = response => console.error(response);

  return(
    <GitHubLogin clientId="6fc655aefb6a09d3c643"
      redirectUri= "http://localhost:8080/"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );


};

export default Login;
