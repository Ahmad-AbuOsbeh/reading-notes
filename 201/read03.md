## HTML 
### chapter 3 Lists :

there are three types of lists :

ol : order list; to numbering your list.
ul : unorder list; to add bullets before yuor items.
dl : definition list; to add words or terms with their definitions

ol and ul should have an " li " list item tag to add your items into the list.

dl should have :
dt : definition term; that words will be defined.
dd : the definition; that describe the term item.

nested list : you can create sub-list into li item, it will make a sub-list ul or ol and its li items with different bullet style.

## CSS
### chapter 13 , Boxes

box : putting each element of HTML into special area in CSS to allow you to control its apperance.

you can change the box dimension by : width and height.
units : pixels , percentage , ems
pixels : certain number.
percentage and ems : its depend on the browser screen or the outer box of controlling box.

- we can use <min-width> and <max-width> to make your page flexible with different screen sizes.
also <min-height> and <max-height> same principle.

- sometimes the content will be larger than the box dimensions, to prevent it to get out of the box we use the <overflow> and it has two types :
 - hidden : its hide all content that don't have space into their box.
 - scroll : its keep all content visible and you can scroll them to read.

border : each box has a border around its area.
margin : the spaces between the box and browser area or outer box of controlling box.
padding : the spaces between the content inside the box and its border.

- if you want to center the box of the screen width, you have to make left and right margins are <auto>, it will stay at center even the screen width was changed.

- the value of paddings and margins will added to the box dimensions.

- display of elements :
  - inline
  - block
  - inline-block
  - none

- visibility : to show or hide elements
  - hidden : but still keeps its place in the page.
  - visible

- you can add a shadows to your border and you can add border to your images.

- border-radius : to make fillet for border's corners.
 by this command, you can control the shape of your border by editing the values of four horizontal spaces of corners and another four spaces for vertical.

## JS
### chapter 2, Basic JavaScript Instructions

Array : as a variable but it can store more than one value.

two types of defining Array :
* literal array : var arrayName = [' ' , ' ' , '  ', ...] 
* array constructor : var arrayName = new Array('  ' ,'   ', ...)

- array index : the reference number of each value into the array =[' 0 ','1','2','3',...]

### chapter 4 , Decisions and Loops

switch : it works as if statement but it can have string values and multi cases for the same block.

- datatypes:
 - string : text
 - number : number
 - boolean : true or false
 - null : empty
 - underdefined : declared variable without assigning its value.
 - NaN : not a number, when should return number but it didn't.

type coercion : ability to change the datatype of variables in JS, its called weak typing.

- loops : its function to still repeat certain code until some condition get false.
 - for loop : used when you know how much the number of times will repeat the code.
 - while loop : used when you don't know when this condition will get false.