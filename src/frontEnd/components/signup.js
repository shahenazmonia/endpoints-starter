import React, {Component} from 'react';
import ReactDom from 'react-dom';
import reactSpinners from 'react-spinners';
class Signup extends Component{
  constructor (props){
    super(props);
    this.state = {
      name:'',
      username:'',
      password:'',
      confirmPassword:''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  handleInput(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  onSubmit(ev) {
    ev.preventDefault();
    const {
      fetchUser
    } = this.props;

    fetchUser(this.state);
  }

  render(){
    const{
      user,
      fetchUser
    }= this.props;
    console.log('user', fetchUser, user);
    return (
      <div className="container" >
        <form onSubmit={this.onSubmit}>
          <hgroup>
            <h2>Regestration</h2>
          </hgroup>

          <fieldset>
            <input
              type="text"
              placeholder="Name"
              required
              value={this.state.name}
              name='name'
              onChange={this.handleInput}
            />
            <input
              type="email"
              placeholder="username"
              required
              value={this.state.username}
              name='username'
              onChange={this.handleInput}

            />
            <input type="password"
              placeholder="password"
              required value={this.state.password}
              name='password'
              onChange={this.handleInput}
            />
            <input type="password"
              placeholder="confirm password"
              required
              value={this.state.confirmPassword}
              name='confirmPassword'
              onChange={this.handleInput}
            />
          </fieldset>

          <button type="submit"> Add client
          </button>
        </form>
      </div>
    );

  }
}

export default Signup;
