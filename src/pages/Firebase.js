import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBkPZS9xL3Ky4SzP_gpcV1fdtRR1zkjx4s",
    authDomain: "projetopuc-490c3.firebaseapp.com",
    projectId: "projetopuc-490c3",
    storageBucket: "projetopuc-490c3.appspot.com",
    messagingSenderId: "986164589430",
    appId: "1:986164589430:web:f572d042b30bbdd6988057"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}; 

export default firebaseConfig;
