import React from "react";
import { login } from "../services/userService";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    login({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log("HEYYYYYYYYY", response);
        if (!response.status) {
          this.setState({ errorMessage: response.errorMessage });
          return;
        }

        return response.data.accessToken
          ? (localStorage.setItem("accessToken", response.data.accessToken),
            console.log("response LOGIN", response),
            this.props.authenticate(response.data.user),
            this.props.history.push("/dashBoard"))
          : this.setState({
              errorMessage: response.data.errorMessage,
            });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("props login", this.props);
    const { email, password, errorMessage } = this.state;
    return (
      <div>
        {errorMessage !== "" && errorMessage}
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label className='label'>Email: </label>
            <div className='control has-icons-left'>
              <input
                className='input'
                name='email'
                value={email}
                onChange={this.handleChange}
                required
                type='email'
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Password: </label>
            <div className='control has-icons-left'>
              <input
                className='input'
                name='password'
                type='password'
                value={password}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <button className='button is-link' type='submit'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
