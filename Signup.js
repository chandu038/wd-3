//let email;

//document.getElementsById("exampleInputEmail1").onclickk = function(){
//var Email = document.getElementsById("mySubmit").value;
//console.log(Email);//
//}//
document.getElementById("mySubmit").onclick = function () {
  email = document.getElementById("exampleInputEmail1").value;
  console.log(email);
  password1 = document.getElementById("exampleInputPassword1").value;
  console.log(password1);
  password2 = document.getElementById("exampleInputPassword2").value;
  console.log(password2);
  document.body.innerHTML =
    " Your Entered data of email is:" +
    email +
    "password1is:" +
    password1 +
    "password2is:" +
    password2;
  if (password1 == password2) {
    alert("password matched succesfully");
    window.location.assign("Login.html");
  } else {
    alert("passwords Not matched");
  }
};