# Socket.io

# Review, Research, and Discussion

**What is the benefit of transforming data into packets?**

- to transform larged data for many computers by dividng them into small pieces.

**UDP is often refereed to as a connectionless protocol. Why is this?**

- UDP is a connectionless protocol. It is known as a datagram protocol because it is analogous to sending a letter where you don't acknowledge receipt.

**Can a socket server application have multiple socket connections?**

- yes, sure.

**Can a socket connection application be connected to multiple socket servers?**

- yes, but I'm not sure.

**Can an application be both a socket server and a socket connection?**

- no,but I'm not sure.

**external resources:**
[https://www.cloudflare.com/learning/network-layer/what-is-a-packet/](https://www.cloudflare.com/learning/network-layer/what-is-a-packet/)

# Document the following Vocabulary Terms

**Observer Pattern :** it is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

**Listener :** like a function that will run when a certain action happen.

**Event Handler :** the function that will run if a certain event invoked.

**Event Driven Programming :** it is a programming paradigm in which the flow of program execution is determined by events.

**Event Loop :** An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

**Event Queue :** it is basically a FIFO queue of events, with some functions to efficiently and safely handle adding and getting events to / from such a queue.

**Call Stack :** it is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

**Emit/Raise/Trigger :** this is the event cycle, that starts with run the event by emit.

**Subscribe :** The .subscribe() function is similar to the Promise.then(), .catch() and .finally() methods in jQuery, but instead of dealing with promises it deals with Observables.

**database :** it is a place or toll that we use to store our data.

# Preparation Materials

# Videos

# OSI Model Explained

- open system interconnection model : that we use to connect or interact two computers togethor.

- it consists of seven layers :

  1.application layer : contains used protocols in networking, our app in the PC use these protocols, like HTTP.

  2.presentation layer : recives the data from application layer, then translate them, compress them, and encrypt them.

  3.session layer : prepare the connection between two computers, session managment, authentication, authorization process. and keep tracking the files.

  4.transport layer : controls the size, speed, correct data transmission.

  5.network layer : determines the IP of two machines, sender and reciever and check if data will reach the correct device or not.

  6.data link layer : access the media.

  7.physical layer : convert the data to signals, and will go through the previous layers till the application layer, then the reciever can see the transported data correctly.

# TCP Handshakes Explained

- TCP : transmission control protocol.
- many applications use TCP like; web, and email.
- before request to access any website TCP will make a connection between the client and the server.

- the connection will be done by three-way handshake :

  - first thing client send a request to the server, SYNC asking to connect.
  - then server will reply with SYNC ACK, that's mean approved and ask client to connect also.
  - last step client reply with ACK, I accept the connection.

- then both of them have a two way connection.

# Read/Skim

# Web Sockets

- WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection.

- Most browsers support the protocol, including Google Chrome, Firefox, Microsoft Edge, Internet Explorer, Safari and Opera.

# Socket.io vs Web Sockets

- WebSocket is the communication Protocol that provides bidirectional communication between the Client and the Server over a TCP connection.
- Socket.IO is a library that enables real-time and full-duplex communication between the Client and the Web servers.
- Socket.io uses the WebSocket protocol to provide the interface.
- Socket.io has two sides :

  - client side : library that run inside the browser.
  - server side : library run with node.js

- IO works on work-based events. there are some reserved events that can be accessed using the Socket on the server side like Connect, message, Disconnect, Ping and Reconnect.

- There are some Client based reserved events like Connect, connect- error, connect-timeout and Reconnect etc.

**WebSocket :**

- connect with TCP connection.
- full duplex communication on TCP connections.
- doesn't support proxy and load balancer.
- doesn't support the broadcasting.
- doesn't have fallback option.

**Socket.io :**

- library work with websocket..
- event-based communication between browser and server.
- supports proxy and load balancer.
- supports the broadcasting.
- supports fallback option.

- WebSocket is the technology, while Socket.io is a library for WebSockets.
