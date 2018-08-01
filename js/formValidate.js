function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePwd(pwd){
    var lower = /^(?=.*[a-z])/;
    var upper=/^(?=.*[A-Z])/;
    var num=/^(?=.*[0-9])/;
    var char=/^(?=.*[!@#\$%\^&\*])/;
    var len=/^(?=.{8,})/;
    return (lower.test(pwd) && upper.test(pwd) && num.test(pwd) && char.test(pwd) && len.test(pwd));

}

function testPwd(pwd1,pwd2){
    return (pwd1.value === pwd2.value)
}

function testCheckbox(cbox){
    return cbox.checked === true;
}

function validateLogin() {
    var pseudo = document.getElementById('pseudo');
    var pwd = document.getElementById('pwd');

    
    if(pseudo.value === '')
        {
            alert("Please enter your Pseudo");
            pseudo.focus();
            return false;
        }
   
    if(!validatePwd(pwd.value))
        {
            alert("Please enter a correct password");
            pwd.focus();
            return false;
        }
    
  alert("Message submitted Thanks :D");
  return true;
}

  

function validateSignin(){
    var pseudo = document.getElementById('sin-pseudo');
    var pwd1 = document.getElementById('pwd1');
    var pwd2=document.getElementById('pwd2');
    var email= document.getElementById('email');
    var ncomp=document.getElementById('ncomp');
    var cbox=document.getElementById('cbox');
   
    if(ncomp.value === '')
        {
            alert("Please enter your full name");
            ncomp.focus();
            return false;
        }
    if(pseudo.value === '')
        {
            alert("Please enter your Pseudo");
            pseudo.focus();
            return false;
        }
     if(!validateEmail(email.value))
        {
            alert("Please enter a correct email");
            email.focus();
            return false;
        }
    
    if(!validatePwd(pwd1.value))
        {
            alert("Please enter a correct password");
            pwd.focus();
            return false;
        }
    if(!testPwd(pwd1,pwd2))
        {
            alert("Passwords do not match");
            pwd.focus();
            return false;
        }
      if(!testCheckbox(cbox))
        {
            alert("You must check");
            cbox.focus();
            return false;
        }
    alert(" work ok ! ");
    return true;
    
}