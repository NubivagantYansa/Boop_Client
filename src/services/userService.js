import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

//validate session
export const validateSession = (accessToken) => {
  return service
    .get(`/auth/session/${accessToken}`)
    .then((response) => response.data)
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
    .then((response) => response.data)
    .catch((err) => err);
};

//login
export const login = ({ email, password }) => {
  return service
    .post("/auth/login", { email, password })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

//upload image
export function uploadImage(image) {
  const uploadData = new FormData();

  uploadData.append("image", image);
  return service
    .post("upload/image", uploadData)
    .then(({ data }) => data) // same as: then((res) => res.data)
    .catch(console.error);
}
