import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxIVsm6iYj98njxasOUGoCzo7Zu28M2tQ",
  authDomain: "e-ecomerce.firebaseapp.com",
  projectId: "e-ecomerce",
  storageBucket: "e-ecomerce.appspot.com",
  messagingSenderId: "855009661132",
  appId: "1:855009661132:web:b62833525c945cda2e3269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}