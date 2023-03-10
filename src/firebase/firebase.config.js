
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth'
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };


// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYL0ui5cChu9K4fRmOkSZ7ME2T0eDqFeQ",
    authDomain: "job-box-react.firebaseapp.com",
    projectId: "job-box-react",
    storageBucket: "job-box-react.appspot.com",
    messagingSenderId: "103311380247",
    appId: "1:103311380247:web:9e3bee8da2ee19e3607152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
export default auth
