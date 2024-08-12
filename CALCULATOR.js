let buttons=document.querySelectorAll("button");
let ipbox=document.querySelector("#ipbox");

let string="";
let arr=Array.from(buttons);
arr.forEach(btn=>{
    btn.addEventListener("click",(e)=>{


        if(e.target.innerHTML == "="){
            try{
            string = eval(string);
            ipbox.value = string;
            } catch {
                ipbox.value ="ERROR !!";
            }
        }else if(e.target.innerHTML == "Ac"){
            string ="";
            ipbox.value=string;
        }else if(e.target.innerHTML == "DEL"){
            string = string.slice(0,-1);
            ipbox.value = string;
        }else{
            string += e.target.innerHTML;
            ipbox.value=string;
        }
        console.log(`CURRENT INPUT : ${string}`);
    });
});
