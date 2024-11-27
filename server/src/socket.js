// handleSocket function to manage socket events
function handleSocket(io) {
    // Listen for new connections from clients
    io.on('connection', (socket) => {
        // Log a message when a new user connects
        console.log('A user connected.');

        // Handle setting the username for the connected user
        socket.on('set username', (username) => {
            // Store the username in the socket object for the current session
            socket.username = username;
            // Log the username when the user joins the chat
            console.log(`${username} joined the chat.`);
        });

        // Handle incoming chat messages from the client
        socket.on('chat message', (msg) => {
            // If the user has set a username, include it in the message, otherwise default to 'Anonymous'
            const fullMessage = `${socket.username || 'Anonymous'}: ${msg}`;

            // Broadcast the message to all other clients except the sender
            socket.broadcast.emit('chat message', fullMessage);

            // Send a confirmation message back to the sender (client who sent the message)
            socket.emit('chat message', `You: ${msg}`);
        });

        // Handle when a user disconnects from the chat
        socket.on('disconnect', () => {
            // Log the username of the user who disconnected, or default to 'A user' if no username is set
            console.log(`${socket.username || 'A user'} disconnected.`);
        });
    });
}

// Export the handleSocket function for use in other parts of the application
module.exports = { handleSocket };
