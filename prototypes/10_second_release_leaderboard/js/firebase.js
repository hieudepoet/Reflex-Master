// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCEeVQzdFzIKw6_yBWr18iOh-O-4z8St94",
//   authDomain: "taptaptap-a465b.firebaseapp.com",
//   databaseURL: "https://taptaptap-a465b-default-rtdb.firebaseio.com",
//   projectId: "taptaptap-a465b",
//   storageBucket: "taptaptap-a465b.firebasestorage.app",
//   messagingSenderId: "922386504980",
//   appId: "1:922386504980:web:0b3824142f7eada0557601",
//   measurementId: "G-RMDGEVV2CS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);
// window.database = db;

const firebaseConfig = {
  apiKey: "AIzaSyCEeVQzdFzIKw6_yBWr18iOh-O-4z8St94",
  authDomain: "taptaptap-a465b.firebaseapp.com",
  databaseURL: "https://taptaptap-a465b-default-rtdb.firebaseio.com",
  projectId: "taptaptap-a465b",
  storageBucket: "taptaptap-a465b.appspot.com",
  messagingSenderId: "922386504980",
  appId: "1:922386504980:web:0b3824142f7eada0557601",
  measurementId: "G-RMDGEVV2CS",
};

// ❗ KHÔNG dùng import, dùng firebase từ CDN
firebase.initializeApp(firebaseConfig);
window.database = firebase.database(); // ✅ Biến global
