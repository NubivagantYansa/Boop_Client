import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

//validate session
export const validateSession = (accessToken) => {
  return service
    .get(`/auth/session/${accessToken}`)
    .then((response) => {
      console.log("VALIDATE THE SESSION", response.data);
      return response.data;
    })
    .catch((err) => err);
};

//signup
export const signup = ({
  userRole,
  username,
  password,
  email,
  image,
  aboutMe,
  borough,
  features,
}) => {
  return service
    .post("/auth/signup", {
      userRole,
      username,
      password,
      email,
      image,
      aboutMe,
      borough,
      features,
    })
    .then((response) => {
      console.log("new user", response.data);
      return response.data;
    })
    .catch((err) => err);
};

//login
export const login = ({ email, password }) => {
  return service
    .post("/auth/login", { email, password })
    .then((response) => {
      console.log("response login", response);
      return { data: response.data, status: true };
    })
    .catch((err) => {
      console.log(err.response);
      return {
        errorMessage: err.response?.data.errorMessage,
        status: false,
        statusCode: err.response.status,
      };
    });
};

export const userLogout = (accessToken) => {
  console.log("access", accessToken);
  return service
    .post(`auth/logout/${accessToken}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

//upload image
export function uploadImage(image) {
  const uploadData = new FormData();

  uploadData.append("image", image);
  return service
    .post("user/image", uploadData)
    .then(({ data }) => data)
    .catch(console.error);
}

// edit profile
export const editProfile = (editInfo, token) => {
  const headers = {
    accessToken: token,
  };
  return service
    .post("user/edit", editInfo, { headers })
    .then((editResp) => {
      console.log("EDITED USER", editResp);
      return editResp.data;
    })
    .catch((error) => console.log(error));
};

// edit password
export const editPassword = (editedPassword, token) => {
  const headers = {
    accessToken: token,
  };
  return service
    .post("user/edit-password", editedPassword, { headers })
    .then((response) => {
      console.log("EDITED password", response);
      return response.data;
    })
    .catch((error) => console.log(error));
};

//gets features extra layer
export const getFeatures = (authorId) => {
  return service
    .get(`/user/features/${authorId}`)
    .then((response) => response.data)
    .catch((err) => err);
};
