# Real-Time Chat Application
This is a real-time chat application built using Node.js, Express, and Socket.IO. It provides a simple interface for users to exchange messages in real time.

## Features
- Real-time communication using WebSockets.
- User-friendly chat interface.
- Automatically serves client-side files when the server is running.
- Real-time messaging using Socket.io.
 - Set a username when joining the chat.
 - Send and receive messages in real-time.
 - Delete messages for everyone with a delete button next to each message.
 - Responsive layout for both desktop and mobile screens.


## Prerequisites
Make sure you have the following installed:
-Node.js (v14 or later)
-npm (comes with Node.js)

# Installation Instructions
## Clone the repository:

- git clone (https://github.com/mayank2713/Real-Time-Chat-Application)
- cd ./server


## Navigate to the server folder:
-cd src

## Install required dependencies: Run the following command to install all necessary packages:
-npm install


# Required Packages and Commands
Below are the required packages and the commands to install them individually:
Express - Web framework for creating the server.
-npm install express

Socket.IO - For real-time communication.
-npm install socket.io

EJS - For rendering dynamic HTML templates.
-npm install ejs

Path - For handling file paths (comes with Node.js, no need to install).

Starting the Application
To start the application, navigate to the server directory and run:


1. /src/server.js
Contains the backend logic for handling user connections and emitting events for messages and deletions.

2. /public/styles.css
Contains all the styling for the chat app including the input box, message bubbles, buttons, and layout.

3. /public/index.ejs
The front-end template that renders the chat interface, allowing users to send messages, set a username, and receive messages in real-time.


This command automatically serves the client-side files and starts the server.
Open your browser and go to http://localhost:3000 to access the chat application



# Project Structure:

project-folder/
├── client/
│   ├── public/         # Static files (CSS, JS, images)
│   ├── views/          # EJS templates
├── src/
│   ├── server.js       # Entry point of the server
│   ├── socket.js       # Handles socket events
├── package.json        # Node.js project file


# Troubleshooting
Port Already in Use: If port 3000 is already in use, you can:

Stop the other service running on the port.
Modify the PORT variable in server.js to use a different port.

# License
Enjoy building and customizing your real-time chat application! 🎉
