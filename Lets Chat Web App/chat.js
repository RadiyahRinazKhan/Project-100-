
var firebaseConfig = {
    apiKey: "AIzaSyBQpd-zlz4H8TZAjPAtLSVjKuPyZfOXiUo",
    authDomain: "kwitter-8403a.firebaseapp.com",
    databaseURL: "https://kwitter-8403a-default-rtdb.firebaseio.com",
    projectId: "kwitter-8403a",
    storageBucket: "kwitter-8403a.appspot.com",
    messagingSenderId: "1007527270579",
    appId: "1:1007527270579:web:3440cc14c7076d2650b8c6"
  };
firebase.initializeApp(firebaseConfig);



firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



