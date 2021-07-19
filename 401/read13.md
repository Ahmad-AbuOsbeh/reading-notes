# Message Queues

# Review, Research, and Discussion

**What does it mean that web sockets are bidirectional? Why is this useful?**

- means you can send and recieve data from client to server and from server to the client.

**Does socket.io use HTTP? Why?**

- Even when websockets can be used, the initial connection setup it done over HTTP. Also, a socket.io server will attach to an HTTP server so it can serve its own client code through /socket.io/socket.io.js.

That said, although you don't need an HTTP server to regular websockets, there's no denying that the websocket protocol was designed with HTTP in mind (as to allow HTTP and websocket servers to co-exist on the same TCP port).

**What happens when a client emits an event?**

- will run the event in server that was listinig for this event.

**What happens when a server emits an event?**

- will run the event in the client that was listinig for this event.

**What happens if a client “misses” an event?**

- the event will not run. actually i searched about 'missing events' but i didn' get a clear answer about them. but i think the window.onload runs before the socket connetion.

**How can we mitigate this?**

- we have to connect the socket before the window.onload

**EXTERNAL RESOURCES :**

- [https://stackoverflow.com/questions/37836130/socket-io-why-does-it-need-an-http-server](https://stackoverflow.com/questions/37836130/socket-io-why-does-it-need-an-http-server)

# Document the following Vocabulary Terms

**Socket :** Sockets allow communication between two different processes on the same or different machines.

**Web Socket :** it a tachnology that uses TCP connection to connect the server and client togethor.

**Socket.io :** it is a library that uses websocket connection to make a real time, event based applications between client and server.

**Client :** the browser or anything consider as interface for the user to communicate another appication.

**Server :** this thing that will run processes from the clients when they communicate it. and these processes will run behined the scense.

**OSI Model :** The open systems interconnection (OSI) model is a conceptual model created by the International Organization for Standardization which enables diverse communication systems to communicate using standard protocols. In plain English, the OSI provides a standard for different computer systems to be able to communicate with each other.

**TCP Model :** TCP stands for Transmission Control Protocol a communications standard that enables application programs and computing devices to exchange messages over a network.

**TCP :** TCP/IP stands for Transmission Control Protocol/Internet Protocol. TCP/IP is a set of standardized rules that allow computers to communicate on a network such as the internet.

**UDP :** User Datagram Protocol (UDP) a communications protocol that facilitates the exchange of messages between computing devices in a network. It’s an alternative to the transmission control protocol (TCP). In a network that uses the Internet Protocol (IP), it is sometimes referred to as UDP/IP.

**Packets :** They are the basic units of information transfer over a network, as each information being sent off by a sender is broken down into small structures to enable easy and quick transmission over network links. Without these fragmentations, it will be a lot harder to move big chunks of information across a network.

# Preparation Materials

# Socket.io Chat Example

- socket io is devided into two parts:

  - client side
  - server side

- to build any project you have to install socket io library on both sides.
- make connection. (it is a reversed method in socket io)
- start making events by emit and listen (on).
- use broadcast in to send for the users except the sender.
- there are another reversed method called 'disconnect' that will disable the connection when the client or the server are off.

# Rooms and Namespaces

- each sockect connection will have a general and default namespace.
- inthis namespace we can create rooms to make a special events inside each room.
- you can handle rooms only from server side. by create a room, then join the socket in this room.
- use 'to' and 'in' to send events in this room.
- you can connect multiple machines or servers togehtor with socket. by change the default adapter by Redis adapter.

# Socket.io Emit Cheatsheet

![socket.io cheatsheet](https://miro.medium.com/max/507/1*hTIVNoxFUXiUrzsRe1cpLg.png)
