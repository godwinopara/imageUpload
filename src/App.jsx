import { useState } from "react";
import bgImg from "./assets/image.svg";

import "./App.css";
import Input from "./components/Input";

function App() {
	return (
		<>
			<div>
				<h1>Upload Image</h1>
				<span>Files should be Jpeg or Png...</span>
				<div>
					<img src={bgImg} alt="background image" />
					<p>Drag & Drop your image here</p>
				</div>
				<span>Or</span>
				<Input />
			</div>
		</>
	);
}

export default App;
