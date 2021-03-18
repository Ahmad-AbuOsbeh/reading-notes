// here is my first coding with javascript language
// the fist important thing in coding with JavaScript is the Datatype

var WelcomeMessage="You are welcome to Solidworks Jordan";

alert(WelcomeMessage);


var ConfirmMessage=confirm("would you like to know who we are ?")

if(ConfirmMessage==true)
{document.write('<h3>'+'We are a specialet page in the mechanical design field, we can help you to convert your ideas into real things, we put the years of experience on your hand.'+'</h3>')}
else{document.write('<h3>'+'IF you are not interested, THANK YOU for your visit!'+'</h3>')}

console.log(ConfirmMessage);

var OurService=prompt("Which is the service you search about ? 3D Modeling || 3D Rendering || 3D Design ?")

if(OurService=='3D Modeling')
   {document.write('<img src="pictures/3D printer.JPG" style="width=550px"/>')}

    else if(OurService=='3D Rendering')
             {document.write('<img src="pictures/RO plant.JPG"/>')}

           else if(OurService=='3D Design')
             {document.write('<img src="pictures/wood2.jpg"/>')}