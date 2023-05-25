import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./uploadSuccess.css";
import { useRef } from "react";

const UploadSuccessful = ({ img, value }) => {
	const inputRef = useRef();
	const handleClick = () => {
		inputRef.current.select();
		navigator.clipboard.writeText(inputRef.current.value);
		alert("Url Copied to Clipboard");
	};

	return (
		<div className="uploadSuccess__wrapper">
			<div className="icon__wrapper">
				<FontAwesomeIcon className="icon" icon={faCheck} />
			</div>
			<h2>Uploaded Successfully</h2>
			<img src={img} alt="" />
			<div className="input__wrapper">
				<input ref={inputRef} type="text" name="link" id="link" defaultValue={img} />
				<button onClick={handleClick} className="btn__copy">
					Copy Link
				</button>
			</div>
		</div>
	);
};

export default UploadSuccessful;
