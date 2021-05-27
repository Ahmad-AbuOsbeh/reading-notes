# In memory storage


## Understanding the JavaScript Call Stack
</br>

1. What is a ‘call’?
- the call stack is a data structure that use LIFO principle that saves an manage the calling functions in js.
</br>

2. How many ‘calls’ can happen at once?
- just one call, beacuase the calling is syncronouns, that is mean you have to wait until the first function finished.
</br>

3. What does LIFO mean?
- it is stand for last in first out, that is mean the last calling function will be executed first one and will pop out of call frame.
</br>

4. Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.
</br></br>

![call stack flow chart](https://res.cloudinary.com/ds-blog/image/upload/ar_16:9,c_crop/v1558991291/1_-_Call_Stack_byzxbc.jpg)
</br>

5. What causes a Stack Overflow?
- when the call stack frame becomes full or reached its maximum limit of pushing functions, this will happen when you call the function inside the function itself.


## JavaScript error messages

1. What is a ‘refrence error’?
- this error will occur when you call a variable before declaring it.

2. What is a ‘syntax error’?
- when you make a mistake with the syntax in js, like lit instead of let.

3. What is a ‘range error’?
- when you ask for a range that is not exist or available (invalid range) either too large or too small.

4. What is a ‘tyep error’?
- when you call a thing and it will be undefined or doesn't exist, and the expected type will be string or number or anything else.

5. What is a breakpoint?
- these points that can you added in your code in the browser to stop running the code to see the results and continue running the code again.

6. What does the word ‘debugger’ do in your code?
- built in feature in javascript in modern browsers. it will force the code to report the errors for the user, we can add breakpoint by this feature to examine the results at some point in our code.


## Things I want to know more about
- i have to practice with debugger feature in javascript.

