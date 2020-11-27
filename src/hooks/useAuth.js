import { useState } from "react";
import { login, signup } from "../services/userService";
import { useHistory } from "react-router-dom";
import { useUser } from "../components/context/userContext";

const useAuth = (form, typeOfAuth) => {
  const history = useHistory();
  const { authenticate } = useUser();
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
            setErrorMessage(response.errorMessage);
            return;
          }
          return response.accessToken
            ? (localStorage.setItem("accessToken", response.accessToken),
              authenticate(response.user),
              history.push("/board"))
            : setErrorMessage(response.errorMessage);
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
            console.log("looook here", response);
            setErrorMessage(response.errorMessage);
            return;
          }
          return response.accessToken
            ? (localStorage.setItem("accessToken", response.accessToken),
              authenticate(response.user),
              history.push("/board"))
            : setErrorMessage(response.errorMessage);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    setStateInfo({ ...stateInfo, [e.target.name]: e.target.value });
  };

  return { stateInfo, setStateInfo, errorMessage, handleChange, handleSubmit };
};

export default useAuth;
