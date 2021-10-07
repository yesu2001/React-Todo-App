import firebase from 'firebase';

  // Initialize Firebase
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAMRCbxiMI8R36ZFWO_SqWcz20unVpq2P8",
  authDomain: "trex-app-d9aa2.firebaseapp.com",
  projectId: "trex-app-d9aa2",
  storageBucket: "trex-app-d9aa2.appspot.com",
  messagingSenderId: "419501750265",
  appId: "1:419501750265:web:8115fc59f521fb6ff62f28",
  measurementId: "G-GC98ESWMMH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};
// export default db;