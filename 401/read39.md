# Redux - Additional Topics

# Review, Research, and Discussion

**>> What’s the best practice for “pre-loading” data into the store (on application start) in a Redux application?**

- to clean up the render by useEffect like willUnMount.

**>> When using a thunk/async action that dispatches the actual action, which do you export from your reducer?**

- when you deal with side effects or async logic or complex sync logic.
- still you export the state from your reducer as before without thunk.

# Document the following Vocabulary Terms

### >> middleware : middlewares in general are functions that run between two things in a certain process. Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

### >> thunk : A thunk is a function that wraps an expression to delay its evaluation.

<br/>

# Preparation Materials

<br/>

# Redux Toolkit (RTK) and Tutorial

- Redux Toolkit is a package that help you to use redux with easy and simple way by :

  - built in things makes your code shorter.
  - configure your store, reducers, middlewares, and DevTools easly.

- The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.

<br/>

# Alternative State Managers

<br/>

# MobX

- MobX is a library that mange the states in your appliaction.

- main functionality in MobX is prevent producing an inconsistent state.

- MobX will make sure that all changes to the application state caused by your actions are automatically processed by all derivations and reactions. Synchronously and glitch-free.

- No boilerplate in MobX. Just some simple, declarative components that form our complete UI

# HookState

- HookState is laibrary based on React state hook, and it is a flexible state management tool.

- HookState is an ideal solution for huge states and very frequent updates.

### Features that provided by HookState :

- global states
- local states
- asynchronously loaded states
- partial state updates
- deeply nested state updates
