import React , {Component} from 'react';

class Login extends Component{

  constructor(props){
    super(props);
    this.state= {
      username: '',
      password: ''
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
      login
    } = this.props;

    login(this.state);
  }
  render(){
    const{
      userLogin,
      login
    }= this.props;
    return(
      <form onSubmit= {this.onSubmit}>
        <input placeholder='username'
          type='text'
          required
          value={this.state.name}
          name='username'
          onChange={this.handleInput} />
        <input placeholder='password'
          type='password'
          required
          value= {this.state.password}
          name='password'
          onChange={this.handleInput} />
        <button type='submit'> Login </button>
      </form>
    );

  }
}

export default Login;
