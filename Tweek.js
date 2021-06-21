/* This is the js for 2nd screen (ie. enter room name screen) */ 
var firebaseConfig = {
  apiKey: "AIzaSyBRNDY_8edz2_FXwgU_LIE0ZH27ugvjyf4",
  authDomain: "glitter-1ad75.firebaseapp.com",
  databaseURL: "https://glitter-1ad75-default-rtdb.firebaseio.com",
  projectId: "glitter-1ad75",
  storageBucket: "glitter-1ad75.appspot.com",
  messagingSenderId: "160517487329",
  appId: "1:160517487329:web:72fd821610d069f70715a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

      var UserName = localStorage.getItem("UserName");
      console.log(UserName);
      document.getElementById("RoomUsername").innerHTML = "Welcome " + UserName+"!"; 
  
      function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey =
  childSnapshot.key;
   Room_names = childKey

   //Start code
   console.log("roomname-"+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML+=row;
   });});}
  getData(); 
  
  function AddRoom()
  {
  RoomName = document.getElementById("RoomName Input").value;
  firebase.database().ref("/").child(RoomName).update({ purpose : "adding room name" });
  localStorage.setItem("RoomName", RoomName);
  console.log(RoomName);
  window.location="TweekRoom.html";
  }


  /* To Fix */
  function redirect(Room_names)
  {
    localStorage.setItem("room_name",Room_names);
    window.location= "TweekRoom.html";
    console.log(Room_names);
  }
  /* To */
  
  
  function Logout()
  {
    localStorage.removeItem("RoomName");
    localStorage.removeItem("user_name");
    window.location="index.html";
  } 

