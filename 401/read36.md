# Application State with Redux

# Review, Research, and Discussion

**What are the advantages of storing tokens in “Cookies” vs “Local Storage”**

### Cookies :

- work with client and server sides.
- primary used for reading server-side.
- you can set expiration date of your data.
- Cookies give you a limit of 4096 bytes/cookie.
- you can only store strings.
- data are sending back and forth with every HTTP request.

### Local storage :

- works with client side only.
- no expiration date available.
- Local Storage is as big as 5MB per domain.
- you can store strings, Javascript primitives, and objects.
- data are not sending back and forth with every HTTP request (keeps the data on client side).

**Explain 3rd party cookies.**

- Third-party cookies are cookies that are set by a website other than the one you are currently on. For example, you can have a "Like" button on your website which will store a cookie on a visitor's computer, that cookie can later be accessed by Facebook to identify visitors and see which websites they visited. Such a cookie is considered to be a 3rd party cookie.

**How do pixel tags work?**

- A tracking pixel is an HTML code snippet which is loaded when a user visits a website or opens an email. It is useful for tracking user behavior and conversions. With a tracking pixel, advertisers can acquire data for online marketing, web analysis or email marketing. With log file analysis, long data evaluation or using appropriate analytical tools, this data can be used for different purposes, for example retargeting.

### External resources :

- [https://www.tutorialspoint.com/What-is-the-difference-between-local-storage-vs-cookies](https://www.tutorialspoint.com/What-is-the-difference-between-local-storage-vs-cookies)
- [https://stackoverflow.com/questions/3220660/local-storage-vs-cookies](https://stackoverflow.com/questions/3220660/local-storage-vs-cookies)
- [https://medium.com/swlh/cookies-vs-localstorage-whats-the-difference-d99f0eb09b44](https://medium.com/swlh/cookies-vs-localstorage-whats-the-difference-d99f0eb09b44)
- [https://cookie-script.com/all-you-need-to-know-about-third-party-cookies.html](https://cookie-script.com/all-you-need-to-know-about-third-party-cookies.html)
- [https://en.ryte.com/wiki/Tracking_Pixel](https://en.ryte.com/wiki/Tracking_Pixel)

# Document the following Vocabulary Terms

### 1. cookies : Cookies are small pieces of information websites store on your computer.

### 2. authorization : Authorization is the process of giving someone the ability to access a resource.

### 3. access control : it is a way that we can use to determine the capabilities of each user that will be signed up based on his role.

### 4. conditional rendering : Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false.

# Preparation Materials

# Dan Abramov Redux Tutorials

- Redux is a state management tool.
- Redux is not a new thing and it works with all UIs libraries and frameworks.
- Redux help you to build a stable and solid states. and makes your app more easy to debug, edit, and test.

# Bookmark

# testing reducers

- testing Redux reducers by jest.
- always good testing for the reducers saves and protect the global states to aviod any issues realted to it.
- reducers are pure functions; that means will give same output for same input always. they don't rely on any other states.

# Redux Docs

### Advantages of using Redux :

- work in different environments (client, server, and native)
- easy to test
- build a storng and stable global states.
- ability to undo/redo the values of states.
- easy to debug, with Redux DevTools.
- works with any UI library or framework.
