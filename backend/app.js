const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.static(__dirname + "/public"));

// Multer Config for where the image will be stored

const storage = multer.diskStorage({
	destination: __dirname + "/public",
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + "-" + uniqueSuffix);
	},
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
	res.send("welcom");
});

app.post("/upload", upload.single("image"), (req, res) => {
	// Get image
	const image = req.file;
	res.send({
		imageUrl: `/${image.filename}`,
	});
});

app.listen(3000);
