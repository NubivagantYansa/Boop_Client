import { useState } from "react";
import { login, signup } from "../services/userService";

export default function useAuth(form, typeOfAuth, props) {
  const [state, setState] = useState(form);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeOfAuth === "login") {
      login({
        ...state,
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
    } else if (typeOfAuth === "signup") {
      signup({
        ...state,
      })
        .then((response) => {
          if (!response.status) {
            this.setState({ errorMessage: response.errorMessage });
            return;
          }
          return response.accessToken
            ? (localStorage.setItem("accessToken", response.accessToken),
              this.props.authenticate(response.user),
              this.props.history.push("/board"))
            : this.setState({
                errorMessage: response.errorMessage,
              });
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return [state, errorMessage, handleChange, handleSubmit];
}
