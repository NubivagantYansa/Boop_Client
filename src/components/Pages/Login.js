import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { login } from "../../services/userService";

// const Login = () => {
//   const [state, errorMessage, handleChange, handleSubmit] = useAuth(
//     {
//       email: "",
//       password: "",
//       errorMessage: "",
//     },
//     "login",
//     props
//   );
//   return (
//     <div>
//       {errorMessage !== "" && errorMessage}
//       <form onSubmit={handleSubmit}>
//         <div className='field'>
//           <label className='label'>Email: </label>
//           <div className='control has-icons-left'>
//             <input
//               className='input'
//               name='email'
//               value={state.email}
//               onChange={handleChange}
//               required
//               type='email'
//             />
//           </div>
//         </div>
//         <div className='field'>
//           <label className='label'>Password: </label>
//           <div className='control has-icons-left'>
//             <input
//               className='input'
//               name='password'
//               type='password'
//               value={state.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <button className='button is-link' type='submit'>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

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
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        if (!response.status) {
          this.setState({ errorMessage: response.errorMessage });
          return;
        }

        return response.data.accessToken
          ? (localStorage.setItem("accessToken", response.data.accessToken),
            this.props.authenticate(response.data.user),
            this.props.history.push("/board"))
          : this.setState({
              errorMessage: response.data.errorMessage,
            });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
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
