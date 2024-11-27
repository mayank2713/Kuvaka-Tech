#Real-Time Chat Application
This is a real-time chat application built using Node.js, Socket.io, and Nodemon. It allows multiple users to communicate in real-time, set usernames, and send messages.

Features
Real-time messaging using Socket.io.
Set a username when joining the chat.
Send and receive messages in real-time.
Responsive layout for both desktop and mobile screens.
Requirements
Before running the app, make sure you have the following installed:

Node.js: Install Node.js from nodejs.org.
npm (Node Package Manager): Comes installed with Node.js.
Optional (for development):
Nodemon: Automatically restarts the server when files are changed.
Install nodemon globally by running the following command:

npm install -g nodemon
Setup
Follow these steps to set up the application on your local machine:

1. Clone the Repository
Clone the repository to your local machine using the following command:


git clone https://github.com/your-username/real-time-chat-app.git
2. Install Dependencies
Navigate to the project folder and install the required dependencies:


cd real-time-chat-app
npm install
This will install the following dependencies:

express: Web framework for Node.js.
socket.io: For real-time communication.
nodemon: For automatic server restarting (optional).
3. Run the Application
To start the server with Nodemon (recommended for development), run:


nodemon server.js
Alternatively, you can use Node directly:


node server.js
4. Access the Chat App
Once the server is running, open your browser and visit:


http://localhost:3000
You should now see the chat interface. Set a username and start chatting!


Contains the backend logic for handling user connections, emitting events for messages, and setting up the server.

/public/styles.css
Contains all the styling for the chat app, including the input box, message bubbles, buttons, and layout.

/views/index.ejs
The front-end template that renders the chat interface, allowing users to send messages, set a username, and receive messages in real-time.

Troubleshooting
1. PowerShell Execution Policy Issue
If you see an error about execution policies (like "scripts are disabled"), you can fix it by changing the execution policy in PowerShell:


Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
2. Nodemon Not Found
If Nodemon is not found, you can install it globally using the following command:


npm install -g nodemon
