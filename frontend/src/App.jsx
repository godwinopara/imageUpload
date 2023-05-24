import { useState } from "react";
import axios from "axios"
import "./App.css";
import UploadImg from "./components/UploadImg";
import UploadSuccessful from "./components/UploadSuccessful";
import UploadLoading from "./components/UploadLoading";

function App() {
	const [image, setImage] = useState(null);
	const [uploadStatus, setUploadStatus] = useState("not-started");
	const [imgUrl, setImgUrl] = useState('')

	const handleInputChange = (e) => {
		setImage(e.target.files[0]);
		setUploadStatus("loading");

		const formData = new FormData()
		formData.append('image': image)

		axios.post('http://localhost:3000/upload', formData, {
			headers: {
				"Content-Type" : 'multipart/form-data'
			}
		})
			.then(res => {
				setUploadStatus('upload-successful')
				console.log(res)
			})
			.catch(err => {
				setUploadStatus('not-started')
				console.log(err)
			})
	};

	return (
		<>
			{uploadStatus === "not-started" && <UploadImg onChange={handleInputChange} />}
			{uploadStatus === "upload-successful" && <UploadSuccessful />}
			{uploadStatus === "loading" && <UploadLoading img={imgUrl} />}
			{uploadStatus}
		</>
	);
}

export default App;
