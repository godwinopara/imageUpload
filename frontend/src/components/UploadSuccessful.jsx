import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./uploadSuccess.css";

const UploadSuccessful = ({ img }) => {
	return (
		<div className="uploadSuccess__wrapper">
			<div className="icon__wrapper">
				<FontAwesomeIcon className="icon" icon={faCheck} />
			</div>
			<h2>Uploaded Successfully</h2>
			<img src={img} alt="" />
			<div className="input__wrapper">
				<input type="text" name="link" id="link" />
				<button className="btn__copy">Copy Link</button>
			</div>
		</div>
	);
};

export default UploadSuccessful;
