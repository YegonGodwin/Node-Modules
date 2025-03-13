const config = require('./config');
const http = require('http');

const server = http.createServer((_req, res) => {
    res.end('Node modules!');
    // <h2>Study Node modules and staff</h2>
    // res.end(<p>Use cases</p>)
});

server.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`)
})
