// server file (to serve the files)
// load dependencies
let express = require('express'), app = express();
const port = 9000;

// this applies to all webpage, no matter the extension
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('MadeBy', 'Ryan Wans @ryanwans');
	next(); // <-- proceed to next page
});

// ********************************** //
// PAGE CONTENT

app.get('/', function(req, res) {
    // when the user brings up the extension of '/' or homepage
    res.sendFile('./static/html/index.html', {root: __dirname});
});

app.get('/favicon.ico', function(req, res) {
    res.sendFile('./static/assets/favicon.ico', {root: __dirname});
})

app.get('/static/css', function(req, res) {
    res.sendFile('./static/css/master.css', {root: __dirname});
})
app.get('/static/js.js', function(req, res) {
    res.sendFile('./static/js/covert.js', {root: __dirname});
})
app.get('/assets/golf.jpg', function(req, res) {
    res.sendFile('./static/assets/cgball.jpg', {root: __dirname});
})
// ********************************** //

// 404 Error (Page Not Found)
app.get('/*', function(req, res) {
	res.end("[RWND] Module 'RWPortal' Said -> External Error (Code 404 or Not Found)\nDone\ndone");
});

// listener event (port 9000)
app.listen(port, () => {
	console['log']('Starting Server on Port 9000...\ndone');
});