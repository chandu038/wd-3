document.getElementById("myLogin").onclick = function () {
  Username = document.getElementById("exampleFormControlInput1").value;
  console.log(Username);
  password1 = document.getElementById("inputPassword2").value;
  console.log(password1);
  document.body.innerHTML =
    " Your Entered data of Username is:" + Username + "passwordis:" + password1;
  if (
    Username == "Chandudarapaneni093@gmail.com" &&
    password1 == "Chandu#013"
  ) {
    alert("password matched succesfully");
    window.location.assign("Profile.html");
  } else {
    alert("Something went wrong");
  }
};
