// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAKKpJsgljZwZdRLRhwM3z4PBr6WewHeZA",
      authDomain: "dhap-uxpr.firebaseapp.com",
      projectId: "dhap-uxpr",
      storageBucket: "dhap-uxpr.appspot.com",
      messagingSenderId: "538615952622",
      appId: "1:538615952622:web:9ff853e9960cd01f092fff"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
