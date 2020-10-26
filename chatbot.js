
var chatmsg=document.getElementById("messages");
var botmsg=document.getElementById("botblock");
var usermsg=document.getElementById("userblock");
var inputmsg=document.getElementById("inputbox");

var update=0,count=0;
let height,weight;
// take the input from user
function userinput(event){
    
    if(event.key=="Enter"){
        count+=1;
        chatmsg.innerHTML+=usermsg.outerHTML;
        update++;
        chatmsg.lastChild.id=update;
        chatmsg.lastChild.childNodes[1].textContent=inputmsg.value;
        processinput(inputmsg.value);
        inputmsg.value="";    
    } 
}

function processinput(inputval){

	if(inputval!=""){
		messages.innerHTML += botblock.outerHTML
		update += 1
		messages.lastChild.id = update;
		messages.lastChild.childNodes[1].textContent = reply(inputval)	
	}

}
function reply(inputdata){
    var result=inputdata.toLowerCase();
    try{
        if(count==1)
         return  "Hello "+ result + "  Choose any task "; 
     
    if(result.includes("bmi")){
       return "enter height cm";
    }
    if(result.includes("no")){
        return "thanku you";
    }
    if(result.includes("yes")){
        window.open("gamepage1.html");
    }
    if(result.includes("cm")){
         height=parseFloat(result);
        return "enter weight in kgs";
    }
    if(result.includes("kg")){
        weight=parseFloat(result);
        height=eval(height/100);
        output1=eval(height*height);
        output=eval(weight/output1);
        if (output < 18.5) {
            return "Your BMI : "+ output + " underweight";
        }
        else if ( output >= 18.5 && output < 24.9){ 
            return "Your BMI : "+ output + " Healthy"
        }
        else if ( output >= 24.9 && output < 30){ 
            return "Your BMI : "+ output + " overweight" 
        }
        else if ( output >=30){
            return "Your BMI : "+ output + " Suffering from Obesity"
        }
    }
    else if(result=="snake game"){
        window.open("gamepage1.html");
    }
    else if(result=="game"){
        window.open("gamepage1.html");
    }
    else if(result=="snake"){
        window.open("gamepage1.html");
    }
    else
    {
      return " Sorry, Something went Wrong Check UNITS ";
    }
  }
  catch{
      return "Sorry That is Not My Work";
  }
  return "Do you want Play Again";
}

