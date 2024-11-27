// Importing required modules
const express = require('express'); // Express is a web framework for Node.js
const http = require('http'); // HTTP module is used to create an HTTP server
const { Server } = require('socket.io'); // Socket.IO is used for real-time communication
const path = require('path'); // Path module is used to handle and transform file paths
const { handleSocket } = require('./socket'); // Custom function to handle socket events

// Create an instance of the Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a new instance of the Socket.IO server and attach it to the HTTP server
const io = new Server(server);

// Serve static files from the 'public' directory in the 'client' folder
// This will allow the server to serve images, CSS, JavaScript, and other static files
app.use(express.static(path.join(__dirname, '../../client/public')));

// Set the view engine to 'ejs' for rendering dynamic HTML pages
app.set('view engine', 'ejs');

// Set the views directory to look for the EJS templates in the 'client/views' folder
app.set('views', path.join(__dirname, '../../client/views'));

// Route to serve the chat page when the user accesses the home page ('/')
app.get('/', (req, res) => {
    res.render('index'); // Render the 'index' EJS template
});

// Initialize socket events by passing the socket.io instance to the handleSocket function
handleSocket(io);

// Start the server on port 3000 and listen for incoming requests
const PORT = 3000;
server.listen(PORT, () => {
    // Log a message once the server is successfully running
    console.log(`Server running on http://localhost:${PORT}`);
});
