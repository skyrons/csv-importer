// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNlQ0E34ud-RcmPDzPEbCYTutMyG_9mAE",
  authDomain: "stock-products-7627c.firebaseapp.com",
  projectId: "stock-products-7627c",
  storageBucket: "stock-products-7627c.appspot.com",
  messagingSenderId: "656536296507",
  appId: "1:656536296507:web:9ec8ae6a4ecd7bf18d101e"
}
// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

export const database = getDatabase();