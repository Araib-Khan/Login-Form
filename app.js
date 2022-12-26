// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase,ref,set,onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmutZMzsw-zoRa4s00yybph7lSLRYwG2E",
  authDomain: "registration-form-d6c41.firebaseapp.com",
  projectId: "registration-form-d6c41",
  storageBucket: "registration-form-d6c41.appspot.com",
  messagingSenderId: "122484437844",
  appId: "1:122484437844:web:5366748f2531707d208ec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var lastqual = document.getElementById('lastqual');
var course = document.getElementById('course');
var contact = document.getElementById('contact');
var cnic = document.getElementById('cnic');
var email = document.getElementById('email');
var password = document.getElementById('password');

var display = document.getElementById('parent');

window.submitbutton = function(){
var stinfo = {
firstname : fname.value,
lastname : lname.value,
lastqualification : lastqual.value,
crs : course.value,
cntct : contact.value,
nicno : cnic.value,
stmail : email.value,
pass : password.value
}

stinfo.id = Math.random().toString().slice(2);
if(stinfo.firstname=="" || stinfo.lastqualification=="" || stinfo.crs=="" || stinfo.nicno=="" || stinfo.stmail=="" || stinfo.pass==""){
window.alert("Please Fill the Form");
}
else{
    let reference = ref(database,`information/${stinfo.id}/`);
set(reference,stinfo);
 console.log(stinfo);
}


}

function getData(){
let reference = ref(database,"information/");
let arr = [];
onChildAdded(reference,function(data){
    arr.push(data.val());
    console.log(arr);
    display.innerHTML = "";
    for(var i = 0; i < arr.length; i++){
        display.innerHTML += `<li>${arr[i].firstname+" "+arr[i].lastname+"<br> "+arr[i].lastqualification+"<br> "+arr[i].crs+"<br> "+arr[i].cntct+"<br> "+arr[i].nicno+"<br> "+arr[i].stmail+"<br> "+arr[i].pass}</li>`
    }
})
}
getData();
