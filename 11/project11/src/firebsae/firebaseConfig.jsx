// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_PROJECT_IN,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDING_ID,
  appId:import.meta.env.VITE_APP_ID
};


// const firebaseConfig = {
//   apiKey: "AIzaSyBF3FYVVIPVtW_jU183ABAakhmZ4yQqLOM",
//   authDomain: "project11-b5f4d.firebaseapp.com",
//   projectId: "project11-b5f4d",
//   storageBucket: "project11-b5f4d.appspot.com",
//   messagingSenderId: "82542678613",
//   appId: "1:82542678613:web:21cef2b39beb03146c7adc"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 