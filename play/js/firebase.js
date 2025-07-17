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

firebase.initializeApp(firebaseConfig);
window.database = firebase.database();
