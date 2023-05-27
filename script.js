const output=  document.querySelector(".output");
const result= document.querySelector(".result");
const buttons=  document.querySelectorAll("button");
buttons.forEach(button=>{
    button.addEventListener("click",calculate)
})
function calculate(){
    var buttonText=this.innerText;
    if (buttonText==="AC"){
        output.innerText=" ";
        result.innerText="0";
        return ;
    }else if (buttonText==="DEL"){
        output.innerText= output.innerText.substring(0,output.innerText.length-1);
        return;
    }else if (buttonText==="="){
        console.log("hello");
        result.innerText=eval(output.innerText);
        
    }else{
        output.innerText +=buttonText;
    }
}