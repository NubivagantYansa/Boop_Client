import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

//get profiles on Board
export const getAllProfiles = () => {
  return service
    .get(`/comm/get-profiles`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => err);
};

//gets profile Details of specific user
export const getProfileDetails = (_id) => {
  return service
    .get(`/comm/get-profile/${_id}`)
    .then((response) => {
      return response.data.profile;
    })
    .catch((err) => err);
};

//get in touch - send email
export const sendEmail = (bodyEmail, receiver, sender) => {
  return service
    .post(`/comm/send-email/${receiver}`, { bodyEmail, sender })
    .then((response) => {
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
