const http = require("http");
const port = 8081;
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Server started !');
    } else if (req.url == '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Dominos!');
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(`{
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }`);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
}

httpServer.listen(port, () => { console.log("server is up at", port) });

module.exports = httpServer;