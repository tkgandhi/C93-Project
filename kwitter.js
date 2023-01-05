function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJIHZ_OABKsvZyKqWglmKqa1afRqpw8i0",
    authDomain: "letschat-c5a05.firebaseapp.com",
    projectId: "letschat-c5a05",
    storageBucket: "letschat-c5a05.appspot.com",
    messagingSenderId: "669585477256",
    appId: "1:669585477256:web:1fe20e40eb969f956a193d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);