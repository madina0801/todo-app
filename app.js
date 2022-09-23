import express, { urlencoded } from "express";
// import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import https from "https";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use(express.static(__dirname));

// Parse data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function(req, res) {
 	let today = new Date();
	if(today.getDay() === 6 || today.getDay() === 0) {
		res.send("Yay, it's the weekend!")
	} else res.send("It's not the weekend :(");
})



app.listen(3000, console.log("Listening on port 3000!"))