// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAydVrCi1Z9UEwquTnZqvxItRiSmQE7Tkw",
  authDomain: "brain-test-app-a10fa.firebaseapp.com",
  projectId: "brain-test-app-a10fa",
  storageBucket: "brain-test-app-a10fa.firebasestorage.app",
  messagingSenderId: "191360037944",
  appId: "1:191360037944:web:83cfd7369bd3318ba622cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;