# Redux - Asynchronous Actions

<br/>

# Review, Research, and Discussion

**>> How granular should your reducers be?**

- maybe i didn't get the question good! but the reducer should has cases for actions types to match one of them and return the new state.

**>> Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched**

- as i understand the concept of using multiple reducers, there is no cons actaully, except if the using of reducers and actions and their logic was in a wrong way.

- but the pros are you can control multiple states by running multiple reducers at same time by one action or dispatcher and in each reducer you can have different logic of other reducers.

**>> Name a strategy for preventing the above**

- you should have one reducer to deal with one state usually.

<br/>

# Document the following Vocabulary Terms

### store : store is an immutable object tree in Redux. A store is a state container which holds the application's state. Redux can have only a single store in your application.

### combined reducers : simply a utility function to simplify the most common use case when writing Redux reducers.

<br/>

# Preparation Materials

# async actions

- reducer should not has any side effect to stay as a pure function.

- "side effect" is any change to state or behavior that can be seen outside of returning a value from a function.

- Redux middleware were designed to enable writing logic that has side effects.

- The thunk middleware allows us to write functions that get dispatch and getState as arguments.

- The thunk functions can have any async logic we want inside, and that logic can dispatch actions and read the store state as needed.

- Writing async logic as thunk functions allows us to reuse that logic without knowing what Redux store we're using ahead of time.

- "action creator pattern" : This pattern of writing a function to prepare something that will get passed to dispatch.

- Thunk functions can be used for both asynchronous and synchronous logic. Thunks provide a way to write any reusable logic that needs access to dispatch and getState.

- use Redux middleware to write a logic with side effect; like asyncronuons functions and paaing data from dispatch to reducer.

- use applyMiddleWare to use middleware
- use thunkMiddleWare to write asyn and sync logic.

# thunk middleware

- Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

- A thunk is a function that wraps an expression to delay its evaluation.

- Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

# redux thunk

- There are two very popular middleware libraries that allow for side effects and asynchronous actions: Redux Thunk and Redux Saga.

- you should use thunk Redux when dealing with external API.

- getState method gives you the current state inside the store.
