
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtHA9DLRqvDiH3rualWKCYB2ZMhrFbBMQ",
  authDomain: "portfolio-26a1c.firebaseapp.com",
  projectId: "portfolio-26a1c",
  storageBucket: "portfolio-26a1c.appspot.com",
  messagingSenderId: "380017843805",
  appId: "1:380017843805:web:5070addfc3ef5aeabd37b4",
  measurementId: "G-CL3KLTBYNE"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
