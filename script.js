let button=document.getElementById("explorebtn");
button.addEventListener("click",function(){
    document.getElementById("course").scrollIntoView({
        behaviour: "smooth"
    });
});
let form=document.getElementById("contactform");
form.addEventListener("submit",function(event){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let msg=document.getElementById("msg").value;
    if(name==""||email==""||msg==""){
        event.preventDefault();
        alert("Please fill all fields!")
    }
});
let ques=document.querySelectorAll(".faq-ques");
ques.forEach(function(ques){
    ques.addEventListener("click",function(){
       let ans=ques.nextElementSibling;
       if(ans.style.display=="block"){
        ans.style.display="none";
       }
       else{
        ans.style.display="block";
       } 
    });
});