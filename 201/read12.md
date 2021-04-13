### Chart.js

- charts allow you to show your data into a gragh or chart, it usauly a better way than the tables, but making charts need extra work.
- we can creat a chart in js by canvas HTML tag.
- you can use chart.js for making charts, there are three types of charts:
 - line chart
 - pie chart
 - bar chart

### Basic usage of canvas

- canvas tag has just two basic attributes; width and hieght, if you didn't use them then the defualt value will be 300 px and 150 px respectivly.

- for old browsers you have to add a faalback content to appears when the main content doesn't appears.
- getContext() is a built in function thats make the rendering of the canvas. between parantheses you have to put the type of rendering like 2d as an example.

### Drawing shapes with canvas

- the location of the reference point in the browser is left-top corner.

- there are three functions to draw a rectangular :
 - fillRect(x, y, width, height) : draws filled rectangle.
 - strokeRect(x, y, width, height) : draws outline of rectngle.
 - clearRect(x, y, width, height) : clears certain area inside the rectangle.

- the shapes consist of some paths and the paths consist of some lines, and you create the final shape (any shape you want) by some orders of creating lines. >> lineTo(x, y)

- the first step of drawing shapes is using beingPath() function to start building your shape.

### Applying styles and colors

- to change the color in your canvas and your shape or path, you have to use:
 - fillStyle= 'color that you want' >> used with filled shapes
 - strokeStyle= 'color that you want' >> used with outline shapes

- to make your shape has a gradient color, you have to use two for loops to create a lot of pieces then you will change the rgb value using the second for loop to give each small part a different color.

- there are a lot of linestyles that can apply on your lines :

 - lineWidth = number : to determine the width of the line.
 - lineCap = butt / round / square
 - lineJoin = round / bevel / miter
 - getLineDash()
 - setLineDash(segments)
 - lineDashOffset = number

- to repeat something you have use : cretePattern(image, type), types : repeat / repeat-x / repeat-y / no-repeat

- also you can apply some shadow to your shape.

### Drawing text

- to draw a text with canvas :
 - fillText(text, x, y, [, maxWidth]) : it draws a text with a certain position and width as a filled text.
 - strokeText(text, x, y, [, maxWidth]) : it draws a text with a certain position and width as an outline text.

- after that you can apply some styles like; font, text align, text baseline and direction.



