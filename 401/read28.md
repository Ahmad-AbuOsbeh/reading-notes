# Component Lifecycle / useEffect()

<br/>

# Review, Research, and Discussion

**>> Why do we not need more .html pages in a multi-page React app?**

- becuase the React is a single page application and only contains and renders one HTML page always.

**>> If we wanted a component to show up on every page, where would we put it and why?
Outside the <BrowserRouter/>
Inside the <BrowserRouter />, outside a <Route />
Inside a <Route />**

- will be inside the Route that will be as an instance of BrowserRouter, to allow the React App render needed component that is exisiting inside the Route, and each time the active route "by path" will be rendered.

**>> What does routing do with the components that were rendered when a new route is requested**

- in switch component from React-router, first route will match the clicked path will be rendered, and will go out the switch and will not see or render the other components.

**>> What does props.children contain?**

- we get props.childern by components composition and contains all props or things that the parent component has in JSX or render region.
- the good thing is will render the children that the component doesn't know them even.

**>> How do useState() and this.setState() differ?**

- setState is merging the previous state with the new one, it means that you dont have to pass the full state object every time you want to change some part of the state. React will update given properties and won't touch the rest. The useState's updater rewrites a previous state with a new one and it does not perform any merging. Its just replacement instead of merging.

## External resources :

- [https://www.reddit.com/r/reactjs/comments/b46fv0/the_difference_between_setstate_and_usestate/](https://www.reddit.com/r/reactjs/comments/b46fv0/the_difference_between_setstate_and_usestate/)

<br/>

# Document the following Vocabulary Terms

### State Hook : built in function in react that allows you to add and update states to your stateless components.

### Mounting and Un-Mounting : "mounting" (adding nodes to the DOM) or render the component, "unmounting" (removing them from the DOM) stop render or unrender the component , and "updating" (making changes to nodes already in the DOM) or edit the exist render of component.

<br/>

# Preparation Materials

# effects hook

- The Effect Hook lets you perform side effects in function components

- The majority of effects don’t need to happen synchronously.

### Tips with useEffect Hook :

    - use Multiple Effects to Separate Concerns.

    - In some cases, cleaning up or applying the effect after every render might create a performance problem.

- useEffect equals life cycle methods in class components.
