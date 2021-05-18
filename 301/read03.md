# Passing Functions as Props


## lists and keys


1-What does .map() return?
- it will return an array with the same length of the looping array. with the same or new values.


2-If I want to loop through an array and display each value in JSX, how do I do that in React?
- you have to use list to save the data in list item that has li elements, then you have to use ReactDOM.render and render data by ul element.


3-Each list item needs a unique **Key**.


4-What is the purpose of a key?
- to give the list a stable identity, and to make React knows which items have changed or edited or removed.



## spread operator
1-What is the spread operator?
- it is **...** used to expand array items and combining arrays and objects and more things also.


2-List 4 things that the spread operator can do.
- split array items to arguments.
- combining or copying arrays.
- adding items in React state.
- using arrays as arguments in math functions.


3-Give an example of using the spread operator to combine two arrays.
- const array1 = [1,2,3] const array2 = [5,6,7]
  const array3=[...array1,...array2]


4-Give an example of using the spread operator to add a new item to an array.
- const array1 = [1,2,3] 
  const array2 = [...array1,3]


5-Give an example of using the spread operator to combine two objects into one.
- const obj1={name: 'ahmad'} const obj2={age:'25'}
  const obj3={...obj1,...obj2}


## passing functions between components
1-In the video, what is the first step that the developer does to pass functions between components?
- he made an increment function and it looped over the array in the state by map.
2-In your own words, what does the increment function do?
- it looping about an array called people by map method. then it will add one to the counter and change the state data by setState depending on the user click.
3-How can you pass a method from a parent component into a child component?
- by using props with the same function name in the child component.
4-How does the child component invoke a method that was passed to it from a parent component?
- by props. using this.props.propName.


## Things I want to know more about


- still, I need more effort to understand React concepts well.