import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '../firebase.js'; // Adjust the path as per your project structure

export default function ProductListing() {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    console.log(image);
    const storage = getStorage(app); // Pass the app object to getStorage
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
        console.log(imagePercent);
      },
      (error) => {
        console.error(error); // Log or handle the error appropriately
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setFormData({ ...formData, profilePicture: downloadURL });
          })
          .catch((error) => {
            console.error(error); // Log or handle the error appropriately
          });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can submit form data or perform other actions here
    
  };

  console.log(formData);

  return (
    <div className="">
      <div className="">
        <h1 className="text-3xl font-bold p-3">Seller can list products from here</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-2xl">
          <input
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            id="img"
            placeholder="Enter Image"
            className="bg-slate-100 p-3"
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Item Name"
            className="bg-slate-100 p-3"
            onChange={handleChange}
          />
          <textarea
            maxLength="200"
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            className="bg-slate-100 p-3"
            onChange={handleChange}
          />
          <input
            min="1"
            max="100000"
            type="number"
            id="price"
            name="price"
            placeholder="What is the price"
            className="bg-slate-100 p-3"
            onChange={handleChange}
          />
          <button type="submit" className="bg-slate-400 h-10 rounded-xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
