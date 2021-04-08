## JavaScript

### chapter 10 Error Handling and Debugging

- execution context: it is how the interpreter of javascript will deal with the content of the code, there is three context execution :
 - global context: anything exists on the main screen and it is not inside anything else.
 - function context: anything will be written inside the function
 - eval context

- with the same previous idea, variables in js will be one of two cases; either in the global scope or function-level scope. variables that have a global scope you can use anywhere in the code, but those are in the function-level scope you can't use them anywhere else except their parent function.

- the Stack: it is the way of sorting or executing the code, js will be run the code line by line, if any value or statement depends on another one that doesn't reach its execution order yet, it will make the first statement is waiting and start execution of the function that the statement depends on it, this process called stacking.

- Hoisting: it is the process to deal with all content in two steps; prepare and execute. prepare means the declaration of variables and functions, and execution is to assign values to declared ones. The preparing process is putting all declared variables and functions at the top of the execution content, after that, it runs the code line by line. 
Therefore; may you call a declared function before defining it, and it will work.

- error object has four things :
 - name: type of execution
 - message: description of the error
 - file number: js file name
 - line number: in the code

- there are seven types of errors in js :
 - Error
 - syntax error: this appears when something missing of the characters like; comma, semi-colon, ..etc
 - reference error: when you call a function or variable are not declared.
 - type error
 - range error
 - URI error
 - eval error

- procedure for debugging the errors :
  - where is the error? you have to determine the js file, line number, type of the error. after that; you have to use the console to see the results, use breakpoints to turn off the commands that cause the error.
  -  what is the error? you have to try to find which statement cause the error by test the code and each time you have to use breakpoints or comment part of your code until you catch the error and you have to fix it. this approach called; try, catch, finally.

- the console has a huge capability by helping you for eliminating errors and seeing the results of your code.