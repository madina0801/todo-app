import express, { urlencoded } from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import https from "https";

const app = express();

// Using ejs as app's view engine
app.set('view engine', ejs);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use(express.static(__dirname));

// Parse data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let today = new Date();
let currentDay = today.getDay();

app.get('/', function(req, res) {
	if(currentDay === 6 || currentDay === 0) {
		res.sendFile(path.join(__dirname, "/weekend.html"))
	} else res.sendFile(path.join(__dirname, "/weekday.html"));
})



app.listen(3000, console.log("Listening on port 3000!"))