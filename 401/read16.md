# AWS: Cloud Servers

# Review, Research, and Discussion

**Describe the Web-Request-Response-Cycle**

- it is the cycle that represents how each process will done when we using the internet. when hit http link, this request will go to the server and maybe to database also or other servers, finally will return a reesponse to the client.

**Explain what a “server” is, as it relates to the WRRC**

- it is a place or code that can't see it as a client, this code treat client requests by organize and store data, then will send a response to that client as he needed.

**What does it mean to “deploy” an application?**

- a process to make our codes run online, not locally. then you can use this application everywhere. also it is a hosting process for our codes and applications in online servers.

# Document the following Vocabulary Terms

**Server :** it is a code that exisiting in a computer, this code deals with the user interface or client requests to do some actions based on these requests. mainly organizing and storing data and make some extra things and processes.

**Pub/Sub :** publisher - subscriber. represents how events work, by publishing the event by someone, then everyone listned to this event as a subscriber will run this event for it when it's published.
in other words Pub/Sub is a flexible, reliable, real-time messaging service for independent applications to publish and subscribe to asynchronous events.

**WRRC :** web request-response cycle. represents how every web service or process done when a client does some action in the user interface.

# Preparation Materials

# Virtual Machines

- virtual machine : consists of hardware and software, software is a controller(operating system) of the hardware parts.

- virtual machine manager (Hypervisor) : it is a type of software that allows us t run an operating system within another operating system.

- examples : virtual box and vm ware.

- why we using virtaul machines ?

  - run more than one operating system togethor(on same computer)
  - for test an application
  - for running old application.

# VMS and the Cloud

- virtualization helps us to utilize our computer potentials.

- server : is a large computer that use virtualization (one physical computer has many operating systems).

- data center : a place that contains the servers.

- cloud computing : using a computer or make some processes on a computer that doesn't exists near you.

# AWS EC2

- Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. Amazon EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment.

# EC2 For Humans

- EC2 is a service from AWS mainly for hosting web application.

- with this service you can choose and select a virtual machine from AWS world to do what you want on it.

- you can select your virtaul machine specifications based on the service that will use.

- the video was a description and steps about how to register and use EC2 AWS service.

# Elastic Beanstalk

- elastic beanstalk AWS is a service that deploys, manages, and scales wep applications and services for you.

- it has manged containers(platforms) like :

  - Java
  - PHP
  - Python
  - .NET
  - NODE.js
  - RUBY
  - DOCKER

- these containers on familiar servers like :

  - Apache HTTP
  - Apache Tomcat
  - Nginx
  - Phusion Passenger
  - IIS (Internet Information Services)

- elastic beanstalk supports AWS services such as :

  - EC2
  - S3
  - simple notification service
  - elastic load balancing.
  - auto scaling.
