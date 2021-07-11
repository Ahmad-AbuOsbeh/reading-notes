# Event Driven Applications

# Review, Research, and Discussion

**Why is access control important?**

- to identify certain functionality for each user when he dealing with the data in the database.

**Describe an application that would need access control.**

- any website need acl, to determine the roles of users. make someone admin, another one editor and so on.

**What is a role used for?**

- to determine the identity of user and what is the things that can does in database.

**Why is role based access control more scalable than discretionary or mandatory access control?**

- beacuse the mandatory access control is controlled by the operating system, under control of system administrater. not like the role based access control list that each user can control his own data.

# Document the following Vocabulary Terms

**Authorization** : it is a security mechanism used to determine user/client privileges or access levels related to system resources, including computer programs, files, services, data and application features.

or in other words : it is the process of giving someone the ability to access a resource.

**Role Based Access Control** : it is a process that assign access and actions according to a person's role within the system. Everyone who holds that role has the same set of rights. Those who hold different roles have different rights.

**Capabilities** : some of access or things that can do if your role match one of them, each role type has different capabilities from others.

# Preparation Materials

# Event Driven Programming

- events : it is the process that will be done when you click or make any command to do something.
- events based on two things :

  - event handler : or call back function, that will run when click on the event.
  - event or main loop : that will sort the orders and run the correct function for the correct clicked event .

- EventEmitter : it is a module from node.js that allows us to use event driven programming, by built in events and functions.

- we can remove any event that we used from EventEmitter by "remveeventlistner" method. most reasons to remove any event are performance reasons when the event become useles or no need to use it.
