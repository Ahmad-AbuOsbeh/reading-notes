# Node Ecosystem, TDD, CI/CD

## Describe (in plain English) what Array.map() does

- it is a javascript method that used to itterate over arrays, like for loop.
  it takes one required parameter and other three as optional. you can edit the data of this array and return the new data inside a new array.

## Describe (in plain English) what Array.reduce() does

- it is a javascript method that used to itterate over arrays, like for loop.
  it takes two required parameters and other two as optional. this method uses an accumlator paramter that will start with an initial value, then every time its value will be updated with the returned value from this method. you can reshape your data with this method.

## Provide code snippets showing how to use superagent() to fetch data from a URL and log the result

## With normal Promise .then() syntax

```
superagent(url)
.then(results=>{ console.log(results) })
.catch(err=>{ console.error(err) })
```

## Again with async / await syntax

```
let getData= async ()=>{
try{
let results = await superagent(url)
console.log(results)
}
catch (err){
console.error(err)
}
}
```

## Explain promises as though you were mentoring a Code 301 level student

- as the javascript is a single thread language, that means it will execute one order in one time, and it will call the exection orders from the call stack from the oldest to the newsest, but sometimes there are a processes that requires much time to run, at this time javascript will skip this order and will execut the next ones that don't need much time. this is why we need the promises to make the javascript wait these functions or processes until finished then it will continue execution process in order.

## Are all callback functions considered to be Asynchronous? Why or Why Not?

- no, the callback functions like the normal functions, but they used as an arguments into another functions, and will be executed after doing some work inside tha main function, and it depends on the task that the callback function will do, then we will treat it as asyncronouns if it need more time to finish the task.
