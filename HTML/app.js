// here is my first coding with javascript language
// the fist important thing in coding with JavaScript is the Datatype

var WelcomeMessage="You are welcome to Solidworks Jordan";

alert(WelcomeMessage);

var ConfirmMessage = ""

// i have to define a fuctions here to reusing this anytime easly

// function getConfirmMessage(userConfirmation){

while (ConfirmMessage !== "yes"){

  ConfirmMessage =prompt("would you like to know who we are ?")

}

if(ConfirmMessage==true)
{document.write('<h3>'+'IF you are not interested, THANK YOU for your visit!'+'</h3>')}
else{document.write('<h3>'+'We are a specialet page in the mechanical design field, we can help you to convert your ideas into real things, we put the years of experience on your hand.'+'</h3>')}

console.log(ConfirmMessage);

 

var OurService  =prompt("Which is the service you search about ? 3D Modeling || 3D Rendering || 3D Design ?")
var numberOfServices=prompt("How much the number of services tha's you need ?")
var resultServices=""

function getUserService(userService,numberOFit){
  
  for(i=0;(userService!== ("3D Modeling"||"3D Rendering"||"3D Design"))&& !(numberOFit >= 1 && numberOFit <= 5); i++)
  
  {
    
    userService=prompt("Which is the service you search about ? 3D Modeling || 3D Rendering || 3D Design ?")
    
    numberOFit=prompt("How much the number of services tha's you need ?")
    
    
    
  }
  // return userService,numberOFit
  
}
getUserService(OurService,numberOfServices);
console.log("OurService",OurService,"numberOfServices",numberOfServices);
if((OurService!== ("3D Modeling"||"3D Rendering"||"3D Design"))&& !(numberOfServices >= 1 && numberOfServices <= 5)){
  alert("please select one of main three our services : 3D Modelind,3D Rendering, 3D Design and please input a number of 1 - 5 services")}
  else{alert("Thank You, Great!")}
              // document.write()



                if(OurService=='3D Modeling'){
                   resultServices='<img src="pictures/3D printer.JPG" style="width:550px"/></br>'}
                
                    else if(OurService=='3D Rendering')
                             {resultServices='<img src="pictures/RO plant.JPG" style="width:550px"/></br>'}
                
                           else if(OurService=='3D Design')
                             {resultServices='<img src="pictures/wood2.jpg" style="width:550px"/></br>'}
                               else{}
  
    var x =0 
    // var y = x+1
    var finalResults ='' 
    var numbering = 1
    // console.log("numberOfServices",numberOfServices);  
     function reultsByFunction(userService2,numberOFit2){                     
    for(x=0;x<numberOFit2;x++){

      finalResults+=(numbering+x)+userService2;
      
      // console.log('finalResults',finalResults)

    }
    return finalResults
  }
    reultsByFunction(resultServices,numberOfServices)
    console.log("finalResults",finalResults);
    // console.log("finalResults",finalResults);
    // document.write(reultsByFunction());

//     var i = l;
// var msg = '';
// // II Set //counter to 1
// // II Message
// // II Store 5 times tabl e in a variable
// while(i < 10){
// msg+= i + ' x 5 = ' + (i * 5) + '<br/>';
// i++}
// // document.getElementByid('answer').innerHTML= msg;
// document.write(msg)