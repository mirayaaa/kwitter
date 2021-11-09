function addUser()
{
    var user_name = document.getElementById("username").value
    localStorage.setItem("login",user_name)
    window.location = "kwitter_room.html"
}