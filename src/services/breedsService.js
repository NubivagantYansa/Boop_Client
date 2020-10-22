import axios from "axios";

const service = axios.create({
  baseURL: "https://dog.ceo/api",
});

export const getAllBreeds = async () => {
  try {
    const response = await service.get("/breeds/list/all");
    const objectOfBreeds = response.data.message;
    const breeds = Object.keys(objectOfBreeds);
    return breeds;
  } catch (error) {
    return error;
  }
};
