import { useState } from "react";
import "./App.css";
import UploadImg from "./components/UploadImg";
import UploadSuccessful from "./components/UploadSuccessful";
import UploadLoading from "./components/UploadLoading";

function App() {
	const [uploadStatus, setUploadStatus] = useState("loading");
	return (
		<>
			{uploadStatus === "not-started" && <UploadImg />}
			{uploadStatus === "upload-successful" && <UploadSuccessful />}
			{uploadStatus === "loading" && <UploadLoading />}
		</>
	);
}

export default App;
