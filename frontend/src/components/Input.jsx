import { useRef, useState } from "react";

const Input = () => {
	const [image, setImage] = useState(null);
	const inputRef = useRef();

	const handleInputChange = (e) => {
		setImage(e.target.files[0]);
	};

	const handleClick = () => {
		inputRef.current.click();
	};
	return (
		<div>
			<label htmlFor="file"></label>
			<input className="input" ref={inputRef} type="file" name="file" id="file" onChange={handleInputChange} />
			<button onClick={handleClick}>Choose a File</button>
		</div>
	);
};

export default Input;
