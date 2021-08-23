# useState() Hook

# Review, Research, and Discussion

**How does React differ from vanilla JS/HTML/CSS?**

- with vanilla you can write normal js only, and you can build UIs but in a hard way :

  - a lot of coding
  - static code (sometimes if you edit on something will affect others)
  - need to refresh whenever you go to new page.

- with React.js you can build UIs with an easy way :

  - component based application.(organized and reusable).
  - single page application(no need to refresh anymore)
  - using JSX (write HTML & JS togethor)

**What is the primary difference between a function component and a class component?**

- function components :

  - use normal js functions
  - called stateless components. (don't have states)
  - can use props as arguments in the function
  - don't have a render method(return JSX directly for rendering).
  - don't have life cycle methods( there is useEffect instead of them).

- class components :

  - use ES6 classes
  - called stateful components (it have a states)
  - can use props.
  - it have a render method to render the HTML elements.
  - it have a life cycle methods.

### External resources :

- [https://ygok17.medium.com/what-are-primary-differences-between-vanilla-js-and-react-js-2c4287ef777a](https://ygok17.medium.com/what-are-primary-differences-between-vanilla-js-and-react-js-2c4287ef777a)

- [https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/](https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/)
- [https://www.freecodecamp.org/news/functional-components-vs-class-components-in-react/](https://www.freecodecamp.org/news/functional-components-vs-class-components-in-react/)

# Document the following Vocabulary Terms

#### Functional Components : react components that use normal functions instead of classes.

#### Children / Child Components : any component that renderd and imported inside another component called child and the parent will be the other component that recieved the child one.

# Preparation Materials

# making sense of hooks

- Hooks let us organize the logic inside a component into reusable isolated units.

- since the hooks are a blocks that built by normal functions, and each custom block does a certain functionality, then you can build your own hooks an share it as npm packages like; "react-native-hooks".

# the state hook

- hooks : A Hook is a special function that lets you “hook into” React features.

- hooks always start with 'use' word.

- functional componenets are stateless components by default, but with hook you can add states to these components.

- array distructuring of useState hook used to give us the first index of returned array form useStete hook will be the state itself, and the second index will be the function that can i set the state again.

# hooks api

- useState hook doesn't merge the old and new state togethor. but this.setState does.
- we use spread operator to solve this issue with useState.
- in useState The initial state argument is only used during the first render.

### Rules of using Hooks :

#### 1. only call hooks at the top level; not inside loops, conditions, and nested functions.

#### 2. only call hooks inside React functional components; not inside normal javascript functions.

- custom hook : if the function name starts with 'use' and run inside it other hook. then consider as a custom hook.

# hooks api reference

- you can put the value of initial state in useState hook as a function and the returned value will be the initial state.

- there are many Hooks; useState, useEffect, useContext, useRef, useLayoutEffect, useDebugValue, useImperativeHandle, useMemo, useCallback, and useReducer.
