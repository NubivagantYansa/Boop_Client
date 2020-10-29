import React from "react";
import { uploadImage } from "../../services/userService";

const AddImage = ({ addImage }) => {
  const handleImageUpload = (e) => {
    console.log("The file to be uploaded is", e.target.files[0]);
    uploadImage(e.target.files[0])
      .catch(console.error)
      .then((res) => addImage(res));
  };

  return (
    <>
      <form>
        <input type='file' onChange={handleImageUpload} />
      </form>
    </>
  );
};

export default AddImage;
