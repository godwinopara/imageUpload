import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UploadImg from "./components/UploadImg";
import UploadSuccessful from "./components/UploadSuccessful";
import UploadLoading from "./components/UploadLoading";

function App() {
	const [image, setImage] = useState(null);
	const [uploadStatus, setUploadStatus] = useState("not-started");
	const [status, setStatus] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	const handleOnImageChange = (e) => {
		setImage(e.target.files[0]);
		setStatus("selected");
	};

	const handleImageUpload = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("image", image);

		axios
			.post("http://localhost:3000/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				setUploadStatus("upload-successful");
				setImgUrl(`http://localhost:3000${res.data.imageUrl}`);
			})
			.catch((err) => {
				setUploadStatus("not-started");
				throw console.error(err);
			});
	};

	const handleDrop = (e) => {
		e.preventDefault();
		const image = e.dataTransfer.items[0].getAsFile();
		setImage(image);
		setStatus("selected");
	};

	return (
		<>
			{uploadStatus === "not-started" && <UploadImg img={image ? URL.createObjectURL(image) : ""} onChange={handleOnImageChange} handleImageUpload={handleImageUpload} status={status} handleDrop={handleDrop} />}
			{uploadStatus === "loading" && <UploadLoading />}
			{uploadStatus === "upload-successful" && <UploadSuccessful img={imgUrl} />}
		</>
	);
}

export default App;
