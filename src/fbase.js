import firebase from "firebase/app";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAUjCp2eIiu4vFQl7h6Qg0NiytHLqt7_H0",
  authDomain: "twitter-ce859.firebaseapp.com",
  projectId: "twitter-ce859",
  storageBucket: "twitter-ce859.appspot.com",
  messagingSenderId: "325948162576",
  appId: "1:325948162576:web:dd0104c0103e561c24c095",
  measurementId: "G-9RM8DPXNC3",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

//수정되나
