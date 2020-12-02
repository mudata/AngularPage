require('dotenv').config()
const http = require('http');
const app = require('./backend/app');
const auth = require('./backend/auth');
const port = process.env.PORT || 3000;

app.set('port', port);
app.use('/auth', auth.router);
const server = http.createServer(app);

server.listen(port);
// , () => {
//     console.log(`server is running on port ${port}`);
// }
app.listen(port);