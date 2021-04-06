### CSS
### chapter 15, Layout

- you can edit the position of any HTML element by using position style or command.

- type of positions :
 - static: it is the default position(if you will not select a position style, then it will be static), it makes your elements under each other and this is called the normal flow.
 - relative: it will move the element by certain pixels or any other unit, relative to its original position.
 - absolute: it will search for relative or absolute parent elements and will be moved inside its parent(if was relative or absolute), if it didn't find any relative parent, then its absolute parent will be HTML tag and can be moved on the whole browser screen.
 - fixed: it will fix the element and stay fixing when scrolling up and down.
 - sticky: it allows movement of the element on the screen, but when scrolling up and reach the top bar, it will be fixed there.

- when you select the position type of the element, you can use offset properties to move it, top, bottom, right, and left.

- the default width of the element is the whole browser width.

- z-index: it allows you to sort your content vertically by input a value for each element, usually this index used when you define positions to prevent the newest elements to lie before the oldest HTML elements.

- when using the float, you should define the width of the floated element to prevent this element take the whole width of the containing element.

- you can make columns side each other by make div for each one of them, and use float+width+margin.

- resolution: number of dots that the screen will show per inch.
- size of the screens is different, also its resolution, therefore; web designers have to make 960-1000 pixels for width and for height by scrolling up and down.

- fixed layout: when using the pixels for element sizing
- liquid layout: when using the percentage of the browser area

- fixed layout more accurate to control your HTML elements and easier than liquid layouts, but the liquid layout is more dynamic with multi-screens and sizes.

- layout grid: divide your page into multi areas, like; columns, this makes your page more sorting and clearing to get the information by the user.