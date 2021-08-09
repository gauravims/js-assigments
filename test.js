function Validate(){
    var age = parseInt(document.getElementById("text").value);
    var msg = ""
    if(age>=18){
        msg = "you are eligible";
    }else{
        msg = "not eligibal,but after"+(18-age)+ " year you can vote";
    }
    document.getElementById("msg").innerHTML=msg;
}
document.getElementById("btn").addEventListener("click",Validate);