# Express REST API

# Review, Research, and Discussion

**Name 3 real world use cases where you’d want to change the request with custom middleware**

1- validte emails of users

2- validate passwords structure

3- validate data type of inputted data

**True or false: The route handler is middleware?**

- true.

**In what ways can a middleware function end the process and send data to the browser?**

1- when the process or cycle finished, and the route handler will send the response.

2- or if there is something wrong in validation or in request, then error handler will send an error response.

**At what point in the request lifecycle can you “inject” middleware?**

- after the route and before the route handler.

**What can cause express to error with “Request headers sent twice, cannot start a second response”**

- this will happen with asyncronouns callback functions, then we have to use return of the "res.send" inside the function.

external resources :

[https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client](https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client)
[https://www.programmersought.com/article/9664918967/](https://www.programmersought.com/article/9664918967/)

# Document the following Vocabulary Terms

**Middleware** : functions that execute during the lifecycle of the request to the express server.

**Request Object** : the main entry point for an application to issue a request to the Library, this object allows us to send GEt, POST, PUT, and DELETE methods.

**Response Object** : this object that contains all data of the response; headers, body, and status.

**Application Middleware** : normal middlewars that we can make them and call them globaly for all application requests.

**Routing Middleware** : using espress routing to execute a certain middleware for a group of related routes.

**Test Driven Development** : it is a software development practice. make a failed test, let the test pass, then refactor the code.

**Behavioral Testing** : is a testing of the external behaviour of the program, also known as black box testing. It is usually a functional testing.

# Preparation Materials

## Review: ES6 Classes

- class : is a blueprint for data modeling. it's like the functions that have a constructor to create new objects or instances.
- there are two ways of creating class; class decleration and class expression.
- no one of them will be hoisted.
- only we must have one constructor inside each class.
- anything inside the class body will be execute in strict mode.
- we can create properties and methods inside the class.
- there are many types of methods that we can create inside the class like; prototypes, generating, and static methods.

## Express Routing & Using Express Routing

**Routing** : it is how the application will act when the request match a specific path and method.

### Route methods

- the REST APi http methods that can use to do something in your express server.
- all() : by this method you can use all http methods for the same route.

### Route paths

- represents the endpoint of the request.
- this can be; string, string pattern, regular expression, and array.

### Route handlers

- this represents the callback functions that will be executed when the request match the http method & the path.
- you can use these functions as; write the function inside the route, array of functions, and combination of both.
- you have to use next() object to continue the execution of other middelware functions.

### Response methods

- this res() object will terminate the request-response cycle. without using it inside the callback function the client will be waiting.
- there are many methods inside this obj like; send, json, end, download, render, redirect,..etc.

### app.route()

- like all() method but here you have to write the http methods also.

### express.Router

- it is a mini-express application just the routing stuff, that allows you to link your related routes by one route.
