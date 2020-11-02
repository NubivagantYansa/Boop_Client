import { useState } from "react";
import { login, signup } from "../services/userService";

const useAuth = (form, typeOfAuth, props) => {
  const [stateInfo, setStateInfo] = useState(form);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeOfAuth === "login") {
      login({
        ...stateInfo,
      })
        .then((response) => {
          if (!response.status) {
            setErrorMessage({ errorMessage: response.errorMessage });
            return;
          }

          return response.data.accessToken
            ? (localStorage.setItem("accessToken", response.data.accessToken),
              props.authenticate(response.data.user),
              props.history.push("/board"))
            : setErrorMessage({
                errorMessage: response.data.errorMessage,
              });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (typeOfAuth === "signup") {
      signup({
        ...stateInfo,
      })
        .then((response) => {
          if (!response.status) {
            setErrorMessage({ errorMessage: response.errorMessage });
            return;
          }
          return response.accessToken
            ? (localStorage.setItem("accessToken", response.accessToken),
              props.authenticate(response.user),
              props.history.push("/board"))
            : setErrorMessage({
                errorMessage: response.errorMessage,
              });
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    setStateInfo({ ...stateInfo, [e.target.name]: e.target.value });
  };

  return [stateInfo, setStateInfo, errorMessage, handleChange, handleSubmit];
};

export default useAuth;
