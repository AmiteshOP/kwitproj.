const firebaseConfig = {
  apiKey: "AIzaSyCjTl6PDtmEiCrspmms0hri8LrivImRok0",
  authDomain: "kwitter-790f3.firebaseapp.com",
  projectId: "kwitter-790f3",
  storageBucket: "kwitter-790f3.appspot.com",
  messagingSenderId: "596137941024",
  appId: "1:596137941024:web:7009fe79f6db17804fc445",
  measurementId: "G-HYNQNGJWBM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function addUser()
{
user_name = document.getElementById("user_name").value; 
firebase.database().ref("/").child(user_name).update({ });
}