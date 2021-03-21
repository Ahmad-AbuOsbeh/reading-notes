// here is my first coding with javascript language
// the fist important thing in coding with JavaScript is the Datatype

var WelcomeMessage="You are welcome to Solidworks Jordan";

alert(WelcomeMessage);

var ConfirmMessage = ""
while (ConfirmMessage !== "yes"){

  ConfirmMessage =prompt("would you like to know who we are ?")

}

if(ConfirmMessage==true)
{document.write('<h3>'+'We are a specialet page in the mechanical design field, we can help you to convert your ideas into real things, we put the years of experience on your hand.'+'</h3>')}
else{document.write('<h3>'+'IF you are not interested, THANK YOU for your visit!'+'</h3>')}

console.log(ConfirmMessage);

 

var OurService = ""
var numberOfServices=0
var resultServices=""
    for(i=0;(OurService!== ("3D Modeling"||"3D Rendering"||"3D Design"))&& !(numberOfServices >= 1 && numberOfServices <= 5); i++)
      
{

  OurService=prompt("Which is the service you search about ? 3D Modeling || 3D Rendering || 3D Design ?")

  numberOfServices=prompt("How much the number of services tha's you need ?")

       if((OurService!== ("3D Modeling"||"3D Rendering"||"3D Design"))&& !(numberOfServices >= 1 && numberOfServices <= 5)){
             alert("please select one of main three our services : 3D Modelind,3D Rendering, 3D Design and please input a number of 1 - 5 services")}
                 else{alert("Thank You, Great!")}
 

                 
                 
                 
                }
                if(OurService=='3D Modeling'){
                   resultServices='<img src="pictures/3D printer.JPG" style="width:550px"/></br>'}
                
                    else if(OurService=='3D Rendering')
                             {resultServices='<img src="pictures/RO plant.JPG" style="width:550px"/></br>'}
                
                           else if(OurService=='3D Design')
                             {resultServices='<img src="pictures/wood2.jpg" style="width:550px"/></br>'}
                               else{}
  
    // var x =0 
    // var y = x+1
    var finalResults ='' 
    var numbering = 1
    console.log("numberOfServices",numberOfServices);                         
    for(x=0;x<numberOfServices;x++){

      finalResults+=(numbering+x)+resultServices;


    }
    console.log('finalResults',finalResults)

    document.write(finalResults);