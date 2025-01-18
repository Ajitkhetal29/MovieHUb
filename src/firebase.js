import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD6sJej-nDF8qtfJ7hf0xDekbfMr7ne2Fk",
  authDomain: "moviehub-b9ec1.firebaseapp.com",
  projectId: "moviehub-b9ec1",
  storageBucket: "moviehub-b9ec1.firebasestorage.app",
  messagingSenderId: "639528898939",
  appId: "1:639528898939:web:3b7d272e710042ab59edde",
  measurementId: "G-N5VBY5M7C7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name, email, password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email , password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid : user.uid,
            name ,
            authProvider:'local',
            email,

        })
    } catch (error) {
        alert(error)
        console.log(error);
        
    }
}

