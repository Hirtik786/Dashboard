let ul = document.getElementById("ul");
let number = document.getElementById("number");
let totalStudents = document.getElementById("totalStudents");
let webStudents = document.getElementById("webStudents");
let appStudents = document.getElementById("appStudents");
let maleStudents = document.getElementById("maleStudents");
let femaleStudents = document.getElementById("femaleStudents");
let GraphicStudents = document.getElementById("GraphicStudents");
let SocialStudents = document.getElementById("SocialStudents");
let wordpressStudents = document.getElementById("wordpressStudents");

let hi = () => {
  firebase
    .firestore()
    .collection("Users")
    .get()
    .then((doc) => {
      ul.style.display = "block";
      doc.forEach((docRes) => {
        // let data = docRes;
        console.log("data", docRes.data());
        let li = document.createElement("tr");
        ul.appendChild(li);

        let li1 = document.createElement("td");
        li.appendChild(li1);
        li1.innerHTML = docRes.data().Username;

        let li2 = document.createElement("td");
        li.appendChild(li2);
        li2.innerHTML = docRes.data().FatherName;

        let li3 = document.createElement("td");
        li.appendChild(li3);
        li3.innerHTML = docRes.data().EmailAddress;

        let li4 = document.createElement("td");
        li.appendChild(li4);
        li4.innerHTML = docRes.data().PhoneNumber;

        let li5 = document.createElement("td");
        li.appendChild(li5);
        li5.innerHTML = docRes.data().CnicNumber;

        let li6 = document.createElement("td");
        li.appendChild(li6);
        li6.innerHTML = docRes.data().SelectCourse;

        let li7 = document.createElement("td");
        li.appendChild(li7);
        li7.innerHTML = docRes.data().SelectGender;
      });
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  firebase
    .firestore()
    .collection("Users")
    .get()
    .then((doc) => {
      // console.log("total users" , doc.size);
      // number.innerHTML = doc.size
      totalStudents.innerHTML = doc.size;
    });

  firebase
    .firestore()
    .collection("Users")
    .where("SelectGender", "==", "Male")
    .onSnapshot((querySnapshot) => {
      // console.log("male" ,  querySnapshot.size);
      maleStudents.innerHTML = querySnapshot.size;
    });

  firebase
    .firestore()
    .collection("Users")
    .where("SelectGender", "==", "Female")
    .onSnapshot((querySnapshot) => {
      // console.log("Female" ,  querySnapshot.size);
      femaleStudents.innerHTML = querySnapshot.size;
    });

  firebase
    .firestore()
    .collection("Users")
    .where("SelectCourse", "==", "Web Development")
    .onSnapshot((querySnapshot) => {
      // console.log("Web Development" ,  querySnapshot.size);
      webStudents.innerHTML = querySnapshot.size;
    });

  firebase
    .firestore()
    .collection("Users")
    .where("SelectCourse", "==", "App Development")
    .onSnapshot((querySnapshot) => {
      // console.log("App Development" ,  querySnapshot.size);
      appStudents.innerHTML = querySnapshot.size;
    });

  firebase
    .firestore()
    .collection("Users")
    .where("SelectCourse", "==", "Graphic Designing")
    .onSnapshot((querySnapshot) => {
      // console.log("App Development" ,  querySnapshot.size);
      GraphicStudents.innerHTML = querySnapshot.size;
    });

  firebase
    .firestore()
    .collection("Users")
    .where("SelectCourse", "==", "Social Media Marketing")
    .onSnapshot((querySnapshot) => {
      // console.log("App Development", querySnapshot.size);
      SocialStudents.innerHTML = querySnapshot.size;
    });

  firebase
    .firestore()
    .collection("Users")
    .where("SelectCourse", "==", "Wordpress")
    .onSnapshot((querySnapshot) => {
      // console.log("wordpress", querySnapshot.size);
      wordpressStudents.innerHTML = querySnapshot.size;
    });
};
window.onload = hi;


let logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Sign-out successful");
      window.location.assign("index.html");
    })
    .catch((error) => {
      console.log("error", error.message);
    });
};