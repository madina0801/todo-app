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
let newItems = [];

app.get('/', function(req, res) {
	const options = {weekday: 'long', day: "numeric", month: "long"};
	let day = today.toLocaleDateString("en-US", options);

	res.render('list', {day, newItems});
})


app.post("/", function(req, res) {
	let newItem = req.body.item;
	newItems.push(newItem);
	res.redirect("/");
})




app.listen(3000, console.log("Listening on port 3000!"))