const config = {
   apiKey: "AIzaSyB9KiYtNtSK_XJFJ_F-_YoRiD9xDmhXCCE",
   authDomain: "chatt-b3c93.firebaseapp.com",
   databaseURL: "https://chatt-b3c93-default-rtdb.firebaseio.com",
   projectId: "chatt-b3c93",
   storageBucket: "chatt-b3c93.appspot.com",
   messagingSenderId: "961444473049",
   appId: "1:961444473049:web:1e9750ebf9c255d889f6c8",
   measurementId: "G-N58WYMH3BC"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "kwitter.html";
   
}