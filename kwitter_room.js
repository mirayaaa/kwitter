
var  firebaseConfig = {
      apiKey: "AIzaSyCmB_vE4LiVrVsWJtVQJ938V3lBE6slT2M",
      authDomain: "kwitter-dcd37.firebaseapp.com",
      databaseURL: "https://kwitter-dcd37-default-rtdb.firebaseio.com",
      projectId: "kwitter-dcd37",
      storageBucket: "kwitter-dcd37.appspot.com",
      messagingSenderId: "605392991202",
      appId: "1:605392991202:web:e23bd9952183341d467fbb",
      measurementId: "G-DZVR42D5RW"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
    var user_name = localStorage.getItem("login")
    document.getElementById("username").innerHTML = "Welcome" + user_name +"!"

    function addRoom() {
          console.log ("hi")
          Room_name = document.getElementById("add_room").value
      firebase.database().ref("/").child(Room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", Room_name)

      window.location = "kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row= "<div  class='room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
       document.getElementById("output").innerHTML+=row
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("login")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}