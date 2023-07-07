var firebaseConfig = {
    apiKey: "AIzaSyDSvuNbpHdRyH6k6ew27eEW3hrvak7GS4E",
    authDomain: "kwitter-12069.firebaseapp.com",
    databaseURL: "https://kwitter-12069-default-rtdb.firebaseio.com",
    projectId: "kwitter-12069",
    storageBucket: "kwitter-12069.appspot.com",
    messagingSenderId: "1086821533648",
    appId: "1:1086821533648:web:9a69511dff07f2c8fe5bd5",
    measurementId: "G-E1XZRJFT6W"
  };
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
      }