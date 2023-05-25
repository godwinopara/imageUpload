import { useRef } from "react";
import bgImg from "../assets/image.svg";
import "./uploadImg.css";

const UploadImg = ({ onChange, handleImageUpload, status }) => {
	const inputRef = useRef();

	const handleClick = () => {
		inputRef.current.click();
	};

	return (
		<div className="uploadImg__wrapper">
			<h1>Upload Image</h1>
			<p>Files should be Jpeg or Png...</p>
			<div className="uploadImg__wrapper-img">
				<img src={bgImg} alt="background image" />
				<span> Drag & Drop your image here</span>
			</div>
			<span>Or</span>
			<br />
			<input ref={inputRef} type="file" name="image" accept="image/*" id="image" onChange={onChange} />
			{status === "selected" ? (
				<button className="btn" onClick={handleImageUpload}>
					Upload Image
				</button>
			) : (
				<button className="btn" onClick={handleClick}>
					Choose a file
				</button>
			)}
		</div>
	);
};

export default UploadImg;
