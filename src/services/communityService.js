import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

//get profiles on Board
export const getAllProfiles = () => {
  console.log("Hit the profiles");
  return service
    .get(`/comm/get-profiles`)
    .then((response) => {
      console.log(response.data.profilesList);
      return response.data;
    })
    .catch((err) => err);
};

export const getProfileDetails = (_id) => {
  return service
    .get(`/comm/get-profile/${_id}`)
    .then((response) => {
      return response.data.profile;
    })
    .catch((err) => err);
};