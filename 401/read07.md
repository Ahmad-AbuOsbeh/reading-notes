# Bearer Authorization

# Review, Research, and Discussion

**Write the following steps in the correct order:**

**Receive access token
Redirect to a third party authentication endpoint ||
Register your application to get a client_id and client_secret ||
Make a request to a third-party API endpoint ||
Ask the client if they want to sign in via a third party ||
Receive authorization code ||
Make a request to the access token endpoint**

1.Register your application to get a client_id and client_secret

2.Make a request to a third-party API endpoint

3.Ask the client if they want to sign in via a third party

4.Redirect to a third party authentication endpoint

5.Make a request to the access token endpoint

6.Receive authorization code

**What can you do with an authorization code?**

- you can access the data and you will be an authorized user for that server.

**What can you do with an access token?**

- if this token match the token of arigistered user, then this user can be access data and make requests for the server.

**What’s a benefit of using OAuth instead of your own basic authentication?**

- beacuase it is a common used in the world, and can access most of the websites that might you deal with.

# Document the following Vocabulary Terms

**Client ID:** it is a public identifier for apps

**Client Secret:** it is a secret used by the OAuth Client to Authenticate to the Authorization Server.
The Client Secret is a secret known only to the OAuth Client and the Authorization Server.
Client Secret must be sufficiently random to not be guessable.

**Authentication Endpoint:** it is a security mechanism designed to ensure that only authorized devices can connect to a given network, site or service.

**Access Token Endpoint:** it is where apps make a request to get an access token for a user.

**API Endpoint:** it is the point of entry in a communication channel when two systems are interacting.

**Authorization Code:** it is a temporary code that the client will exchange for an access token. The code itself is obtained from the authorization server where the user gets a chance to see what the information the client is requesting, and approve or deny the request.

**Access Token:** it is the thing that applications use to make API requests on behalf of a user. The access token represents the authorization of a specific application to access specific parts of a user’s data.

# Preparation Materials

# JWTs Explained

- json web token is as open standared. anyone can use it
- we use it to secure our data and request-response process.
- jwt is compact : fast transmission of data.
- jwt is sekf contained : that's means the user will sign in one time, then every request will use the same token of that user.
- jwt generates an access token that consists of three parts:
- header : represents the type of the used algorithm.
- payload : contains the data about the user.
- secret : it is a signiture for the user, that will be the most critical thing in the token.

# Intro to JWT

- main types of used algorithms in jwt :

  - HMAC
  - RSA
  - ECDSA

- jwt is most useful in :

  - Authorization : only one sign-in, then each request will compare the access token.
  - information exchange : it is useful when sending or transmitting data between applications.

- payload contains claims.

- Claims are statements about an entity (typically, the user) and additional data.

- There are three types of claims:

  - registered claims
  - public claims
  - private claims.

- most common types of registered claims :

  - iss (issuer)
  - exp (expiration time)
  - sub (subject)
  - aud (audience)

- The payload will be a Base64Url encoded to form the second part of the JSON Web Token.

- jwt token is smaller than SMAL tokens, which make jwt better to deal with http environments.

- jwt more secure than SWT, beacuse the algorithm and private/public key pair.

# Are JWTs Secure?

- when jwt generates a token, will use smething called secret.
  and you can decode the token and change the data in payload, but this secret you can't know its value. therefore, your token will still safe untill anyone know your secret.
