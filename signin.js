let usercheck = () =>{
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    window.location.assign("Dashboard.html")
  } else {
    // User is signed out
    // ...
  }
});
}
window.onload = usercheck



let message1 = document.getElementById("message1");
let emailSignin = document.getElementById("emailSignin")
let passwordSignin = document.getElementById("passwordSignin")
let login = () => {
  if (emailSignin.value == "") {
    message1.style.display = "block";
    message1.innerHTML = "Type Your Email...!";
    setTimeout(() => {
      message1.style.display = "none";
    }, 2000);
  } else if (passwordSignin.value == "") {
    message1.style.display = "block";
    message1.innerHTML = "Type Your Password...!";
    setTimeout(() => {
      message1.style.display = "none";
    }, 2000);
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailSignin.value, passwordSignin.value)
      .then((userCredential) => {
        console.log("Signed In");
        message1.style.display = "block";
        message1.style.color = "green";
        message1.innerHTML = "Account login Successfully";
        setTimeout(() => {
          message1.style.display = "none";
        }, 1000);
        window.location.assign("Dashboard.html")
      })
      .catch((error) => {
        console.log("error", error.message);
        message1.style.display = "block";
        message1.innerHTML = error.message;
        setTimeout(() => {
          message1.style.display = "none";
        }, 2000);
      });
  }
};


