import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

Firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();
const auth = Firebase.auth();

if (window.location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
  auth.useEmulator("http://localhost:9099", { disableWarnings: true });
}

export default Firebase;
