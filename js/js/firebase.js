// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwchlmMXcJFHES2Kh82FNx_1xahHyU_dU",
  authDomain: "tiranga90-game.firebaseapp.com",
  projectId: "tiranga90-game",
  storageBucket: "tiranga90-game.firebasestorage.app",
  messagingSenderId: "121268626051",
  appId: "1:121268626051:web:6c1459510b476cbaa931b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Export Auth
export { auth };
