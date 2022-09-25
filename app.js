import express, { urlencoded } from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import https from "https";

const app = express();

// Using ejs as app's view engine
app.set('view engine', 'ejs');


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use(express.static(__dirname));

// Parse data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let today = new Date();
let currentDay = today.getDay();
let day = '';
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

app.get('/', function(req, res) {
	day = week[currentDay];

	res.render('list', {day});
})



app.listen(3000, console.log("Listening on port 3000!"))