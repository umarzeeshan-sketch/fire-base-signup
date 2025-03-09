 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getAuth ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBm8_p5i5M68dQzW8EARjTIkcZwTt0wHrY",
   authDomain: "signup-login-bb450.firebaseapp.com",
   projectId: "signup-login-bb450",
   storageBucket: "signup-login-bb450.firebasestorage.app",
   messagingSenderId: "444547274735",
   appId: "1:444547274735:web:cdf15e009f3694815dc81a",
   measurementId: "G-9YPR0F1NVL"
 };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


 const getbtn = document.getElementById("btn");
getbtn.addEventListener('click',function(){
  let email = document.getElementById("semail").value;
  let password = document.getElementById("spass").value;
  
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("user signup")
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('user signup error')
    // ..
  });

}
)

