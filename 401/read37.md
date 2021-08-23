# Redux - Combined Reducers

# Review, Research, and Discussion

**Why choose Redux instead of the Context API for global state?**

- Context API: Resourceful and ideal for small applications where state changes are minimal
- Redux: Perfect for larger applications where there are high-frequency state updates
- Context also doesn't give you anything like the Redux DevTools

**What is the purpose of a reducer?**

- main functionality is updating the state by recieving the returned data from action.

**What does an action contain?**

- type : action type
- payload : data that will use to update the global state.

**Why do we need to copy the state in a reducer?**

- to make the reducer a pure function. the purpose of redux to use reducer as a pure function to make the code predictable and able to debug. then for any input you can predict the output based on this input. therefore we make a copy of state and don't update it directly.

## Exrenal resources:

- [https://www.codehousegroup.com/insight-and-inspiration/tech-stream/using-redux-and-context-api](https://www.codehousegroup.com/insight-and-inspiration/tech-stream/using-redux-and-context-api)
- [https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)

<br/>
# Document the following Vocabulary Terms

### immutable state : the state that can't be changed after it it created.

### time travel in redux : Time travel is the ability to move back and forth among the previous states of an application and view the results in real time.

### action creator : An action creator is merely a function that returns an action object.

### reducer : reducer is a pure function that takes an action and the previous state of the application and returns the new state.

### dispatch : it is a function of the Redux store. You call store. dispatch to dispatch an action. This is the only way to trigger a state change.

<br/>

# Preparation Materials

# Multiple Reducers Example

- can use multiple reducers in redux by comineReducers.
- each reducer will handle different state.
- same action can run and affect multiple states at the same time by multiple redducers.
- don't mutate the states, instead create a new state and replace the state by the new state.

# Redux Docs: Using Combined Reducers

- combineReducers is simply a utility function to simplify the most common use case when writing Redux reducers.

- combineReducers has key&value pairs, the key represents the returned state of the reducer, and the value is the reducer itself.

- when you dispatch an action will run all reducers insides the combinedReducers.

- two ways of initialize a global state :

  1.  second argument in creteStore function.
  2.  from the reducer itself.

# Redux Docs: Combined Reducer Syntax

- best practice to have the key and value the same name and it should be the state name of that reducer that will return.
