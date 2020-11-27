import React from "react";
import { uploadImage } from "../../../services/userService";

const AddImage = ({ addImage }) => {
  const handleImageUpload = (e) => {
    uploadImage(e.target.files[0])
      .catch(console.error)
      .then((res) => addImage(res));
  };

  return (
    <div className='mt-2'>
      <form>
        <input type='file' onChange={handleImageUpload} />
      </form>
    </div>
  );
};

export default AddImage;
