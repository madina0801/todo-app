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

app.use(express.static(path.join(__dirname, "/public")));

// Parse data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let today = new Date();
let newItems = [];
let workItems = [];

app.get('/', function(req, res) {
	const options = {weekday: 'long', day: "numeric", month: "long"};
	let day = today.toLocaleDateString("en-US", options);

	res.render('list', {listTitle: day, newItems, route: req.url});
});

app.post("/", function(req, res) {
	let newItem = req.body.item;

	if(req.body.list === "Work") {
		workItems.push(newItem);
		res.redirect("/work");
	} else {
		newItems.push(newItem);
		res.redirect("/");
	}
});

app.get("/work", function(req, res) {
	res.render("list", {listTitle: "Work", newItems: workItems, route: "/work"});
});

app.post("/work", function(req, res) {
	let newItem = req.body.item;
	workItems.push(newItem);
	res.redirect("/work")
})

app.get("/about", function(req, res) {
	res.render("about");
})


app.listen(3000, console.log("Listening on port 3000!"))