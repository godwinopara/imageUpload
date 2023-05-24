import "./uploadLoading.css";

const UploadLoading = () => {
	return (
		<div className="progress-bar__wrapper">
			<h2>Uploading....</h2>
			{/* <progress className="progress" value={10} max={100} /> */}
			<progress></progress>
		</div>
	);
};

export default UploadLoading;
