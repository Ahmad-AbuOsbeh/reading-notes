# Authentication

# Review, Research, and Discussion

**Explain what a “Singleton” is (in Computer Science terms)**

- A singleton is a class that allows only a single instance of itself to be created and gives access to that created instance. It is used in scenarios when a user wants to restrict instantiation of a class to only one object.

**Explain how the Singleton pattern can be used with Node modules, specifically with classes**

```
class Singleton {
  static instance;
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;

    // your logic here
  }
}
```

```
new Singleton() === new Singleton() // true
```

**If you were tasked with building a middleware system like Express uses, what approach might you take to construct/operate it?**

- actually, I didn't got the question!

**external resources :**

- [https://www.techopedia.com/definition/15830/singleton](https://www.techopedia.com/definition/15830/singleton)
- [https://wanago.io/2019/11/11/javascript-design-patterns-1-singleton-and-the-module/](https://wanago.io/2019/11/11/javascript-design-patterns-1-singleton-and-the-module/)

# Document the following Vocabulary Terms

**Router Middleware :** managing process of your middleware functions by using the Router from express.

**Dynamic Module Loading :** Dynamic module loading allows you to load and uninstall modules without interrupting services. If a required module does not exist in the system, you can use dynamic module loading to successfully load the module file of the required module to the system, and use functions corresponding to the module. You can also dynamically uninstall the module if the module functions are not required.

**Singleton Pattern :** A singleton is a class that allows only a single instance of itself to be created and gives access to that created instance. It is used in scenarios when a user wants to restrict instantiation of a class to only one object.

**CRUD -> REST Method Matches :** C : create > post method, R : read > get method, U : update > put method, D : delete > delete method.

**Mock Testing :** Mock testing is an approach to unit testing that lets you make assertions about how the code under test is interacting with other system modules. In mock testing, the dependencies are replaced with objects that simulate the behaviour of the real ones. The purpose of mocking is to isolate and focus on the code being tested and not on the behaviour or state of external dependencies.

# Preview

Which 3 things had you heard about previously and now have better clarity on?

- mock testing.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

- router middleware, singleton.

What are you most excited about trying to implement or see how it works?

- singleton.

# Preparation Materials

# Securing Passwords

- we don't have to store the passwords as is in our data bases
- hashing is the most important thing that we can do to ensure our data is stored safley.
- there are general ctyptographic hash algorithms that convert the password to another characters in a short time like; MD5, SHA1, SHA256, SHA512, SHA-3.
- there are two main problems with ctyptographic hash algorithms :

  - **Brute Force attack :** this will done by trying different inputs until you match the hash output. becuase you can't reversed the hashed result.

  - **Hash Collision attack :** this with hash algotithms that create one hash result from more different inputs.

- there are algorithms like; PBKDF2 and BCrypt, both of these algorithms use a technique called Key Stretching.

- there is a secuerity factor that will make the hash algorithm slower, and will generate a new hash each period of time, to ensure the Brute Force attack will be failed.

# Basic Auth

- basic access authentication is a method for an HTTP user agent (e.g. a web browser) to provide a user name and password when making a request.

- it a simple method for authentication.
- it use the chaching in the browser to keep the data of the user and don't ask him again to send them.
- it send its data inside the header property of request like this : Authorization: Basic <credentials>
- from the client side should do the encoding of the user credentials (user name & password). if it is not; will recieve an error to use base- for encoding or something else.
- must have a column between the user name and password.

# OWASP auth cheatsheet

- Authentication : the process that check the private data of user, then it will approve or decline this user based on its data.

- you should validate the minimum and maximum inputted length.

- use password strength meter to help the users.

- There are a number of different types of automated attacks that attackers can use to try and compromise user accounts. The most common types are listed below:

  - Brute Force : Testing multiple passwords from a dictionary or other source against a single account.

  - Credential Stuffing :Testing username/password pairs obtained from the breach of another site.

  - Password Spraying : Testing a single weak password against a large number of different accounts.

- **ways or tools of preventing the Brute-Force attack :**

- Multi-Factor Authentication
- Account Lockout
- CAPTCHA
- Security Questions and Memorable Words

# bcrypt docs

- bcrypt : it is a library to help you hash passwords.
- first thing install it by npm i bcrypt
- import it and use .has to hash your password.
- use .compare to do encrypting and comparing with non-hashed one.
- every time will do the hasing will produce different characters, but all of these hashed keys refers or represent same original password.
