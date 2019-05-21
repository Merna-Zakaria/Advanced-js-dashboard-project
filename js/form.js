 // const email = document.forms["postForm"] ["emailFeild"];
 // const password = document.forms["postForm"] ["passwordFeild"];


const form = {
     myForm : document.getElementById("submitForm") ,
     email : document.getElementById("emailFeild") ,
     password : document.getElementById("passwordFeild") ,
     emailError : document.getElementById("emailError") ,
     passwordError : document.getElementById("passwordError") ,
     submitBtn : document.getElementById("login") 
};
var emptyFeildMsg ;
let resultEmail,
resultPassword;


form.email.addEventListener('blur', emailValidate) ;
form.password.addEventListener('blur', passwordValidate);


function emailValidate(){

const re = /^[a-zA-Z0-9]+\w+@+\S+[.com]$/g;
let regEmail=re.test(form.email.value);
if(!regEmail){
    emailError.style.display='block';
    form.email.style.border="1px solid red";
    form.submitBtn.disabled = true;
    resultEmail = false;
}
else{
    emailError.style.display='none'; 
    form.submitBtn.disabled = false;
    resultEmail = true;
    
}
return resultEmail;
};

function passwordValidate(){
const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/ ;
let regPassword=re.test(form.password.value);
if(!regPassword){
    passwordError.style.display='block';
    form.password.style.border="1px solid red";
    form.submitBtn.disabled = true; 
    resultPassword =false;
}
else{
    passwordError.style.display='none'; 
    form.submitBtn.disabled = false;
    resultPassword = true;
}
return resultPassword;
};








form.myForm.addEventListener('submit' , submitted)

function submitted(event){
  
    event.preventDefault();

    if(form.email.value=="" && form.password.value==""  ){
        emptyFeildMsg = document.createElement("p");
        emptyFeildMsg.setAttribute("display", "block");
        emptyFeildMsg.style.color ="red";
        const text = document.createTextNode('you must enter your email and password');
        emptyFeildMsg.appendChild(text)
        form.myForm.appendChild(emptyFeildMsg);
        form.submitBtn.disabled = true;
        form.password.style.border="1px solid red";
        form.email.style.border="1px solid red";
        // console.log('welcome')
    }
  else{
    emailValidate()
    passwordValidate()
  }
   
  if(resultEmail==true && resultPassword==true ){
 
  
    const successLoginMsg = document.createElement('p');
    successLoginMsg.style.color = "white";
    const text = document.createTextNode('you are login successfully');
    successLoginMsg.appendChild(text);
    form.myForm.appendChild(successLoginMsg);
    form.submitBtn.disabled = true;
    form.password.style.border="1px solid white";
    form.email.style.border="1px solid white";
    

    // emptyFeildMsg.style.display = "none";
  

   
   
    }
    form.submitBtn.addEventListener("click" ,function(){
        window.location.href="file:///D:/practical/advanced%20js%20project/index.html";
        console.log("hi");
    })

    emptyFeildMsg.style.display = "none";
};

    





