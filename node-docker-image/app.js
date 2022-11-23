const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send(
		'<h1>Hello from node-express</h1><br/><h3>author: <a href="https://github.com/uttamsutariya">uttamsutariya (github)</a></h3>'
	);
});

app.listen(port, () => {
	console.log(`Express app listening on port:${port}`);
});
