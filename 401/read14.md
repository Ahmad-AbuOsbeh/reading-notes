# Event Driven Architecture

# Review, Research, and Discussion

**What’s the difference between a FIFO and a standard queue?**

- ![queue](https://miro.medium.com/max/2000/1*hUmRcqAz9_M2GZrY-F1TtA.png)

**How can the server be assured a message was properly received?**

- by recieving a response from client side, else will throw an error.

**What classic design pattern is best represented by event driven programming?**

- The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

**How do you test an event driven system?**

- by testing, mocking and spy.

**External resources :**

- [https://medium.com/awesome-cloud/aws-difference-between-sqs-standard-and-fifo-first-in-first-out-queues-28d1ea5e153](https://medium.com/awesome-cloud/aws-difference-between-sqs-standard-and-fifo-first-in-first-out-queues-28d1ea5e153)

# Document the following Vocabulary Terms

**FIFO Queue :** A FIFO queue is a queue that operates on the first-in, first-out principle, hence the name. This is also referred to as the first-come, first-served principle.

**Pub/Sub :** Publish/subscribe messaging, or pub/sub messaging, is a form of asynchronous service-to-service communication used in serverless and microservices architectures. In a pub/sub model, any message published to a topic is immediately received by all of the subscribers to the topic. Pub/sub messaging can be used to enable event-driven architectures, or to decouple applications in order to increase performance, reliability and scalability.

# Preparation Materials

# AWS SNS and SQS

## SNS

- simple notification services.
- publisher/subsicriber system.
- publish a message about some topic, then will be delivered to many subsicribers with diffrent types.

## SQS

- simple queue service.
- queueing service for message processing.
- the system must poll the queue to discover a new event.
- processing in the queue will be for single consumer.

### - it is important to use SNS in your application to make the notification process goes in parallel not in sequence. then will aviod the partial failing errors. that's means only the faild process will be restarted not the whole cycle.

### - also you can use SQS inside a SNS to make some processing for a certain event.
