import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEUVyfN04CbT5GUzQj_sx1e5-VOG8tpL8",
  authDomain: "grocerlist-c2001.firebaseapp.com",
  projectId: "grocerlist-c2001",
  storageBucket: "grocerlist-c2001.appspot.com",
  messagingSenderId: "940530717677",
  appId: "1:940530717677:web:fefb3bfb626b7d8c8a4de4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Google provider authentication configuration
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// getAuth instance initialization
export const auth = getAuth();
// signinwithgooglepopup instace initialization
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

//instantiate firestore
//creating the db
export const db = getFirestore();
//creating user document after an authentication to store it on firestore
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //check if auth user is already exist in firestore or not
  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //if already exist just return the document reference
  return userDocRef;
};
