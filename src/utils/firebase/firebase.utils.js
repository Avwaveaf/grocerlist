import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
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

//creting write db instance
export const addCollectionAndDoc = async (objectToAdd, objectOwner) => {
  // const collectionRef = collection(db, collectionKey);
  // const batch = writeBatch(db);
  // const documentRefSnapshot = doc(collectionRef, objectOwner.);
  // const q = query(collectionRef);
  // const querySnapshot = await getDocs(q);
  // const itemMap = querySnapshot.docs.filter(
  //   (e) => e.id === documentRefSnapshot.id
  // );
  // const querySnapshotData = itemMap[0].data();
  // const itemMap = querySnapshot.docs.reduce((firstData) => firstData.data());
  // .filter((e) => e.ref === documentRefSnapshot.ref)
  // if (querySnapshotData) {
  //   const { cardVariety } = querySnapshotData;
  //   const objectToAddItems = [];
  //   cardVariety.map((e) => objectToAddItems.push(e));
  //   objectToAdd.cardVariety.map((e) => objectToAddItems.push(e));
  //   batch.set(documentRefSnapshot, { cardVariety: objectToAddItems });
  // } else {
  //   batch.set(documentRefSnapshot, objectToAdd);
  // }
  // await batch.commit();
  // const dietDocRef = doc(db, "dietList", objectOwner);
  // const dietSnapshot = await getDoc(dietDocRef);
  // // if(!dietSnapshot.exists()){
  // //   await setDoc(dietSnapshot,objectToAdd);
  // // }else{
  // //   await setDoc()
  // // }
  // await setDoc(dietDocRef, { cardVariety: objectToAdd });
  // console.log("done");
  // const { cardVariety } = objectToAdd;
  const objectToAddItemFiltered = [];
  objectToAdd.forEach((e) => {
    const {
      id,
      _id,
      brands = "product_brands",
      ecoscore_grade = "-",
      image_url = "https://via.placeholder.com/100/000000/FFFFFF/?text=Product Image",
      labels = "brand_label",
      manufacturing_places = "unknown",
      nutiments = "notSetted",
      product_name = "product_name",
      product_name_en = "product_name",
      quantity = "-",
      code = "-",
    } = e;
    const item = {
      id: id,
      _id: _id,
      brands: brands,
      ecoscore_grade: ecoscore_grade,
      image_url: image_url,
      labels: labels,
      manufacturing_places: manufacturing_places,
      nutiments: nutiments,
      product_name: product_name,
      product_name_en: product_name_en,
      quantity: quantity,
      code: code,
    };
    objectToAddItemFiltered.push(item);
  });
  const productCollection = {
    cardVariety: objectToAddItemFiltered,
  };
  const prevData = [];
  const id = objectOwner.uid;
  const usersDietListRef = collection(db, "usersDietList");
  const q = query(usersDietListRef);

  const querySnapshot = await getDocs(q);
  if (querySnapshot) {
    const dietList = querySnapshot.docs;
    const dietListFilteredData = dietList.filter((e) => e.id === id);
    if (dietListFilteredData.length) {
      const dietListData = dietListFilteredData[0].data();
      prevData.push(dietListData);
    } else {
      prevData.push({ cardVariety: [] });
    }
  }

  const collectionRef = collection(db, "usersDietList");
  const batch = writeBatch(db);

  const docRef = doc(collectionRef, objectOwner.uid);
  if (prevData) {
    const mergedProducts = productCollection.cardVariety.concat(
      prevData[0].cardVariety
    );
    const mergedData = {
      cardVariety: mergedProducts,
    };
    batch.set(docRef, mergedData);
    // console.log(mergedData);
  } else {
    batch.set(docRef, productCollection);
  }

  await batch.commit();
  console.log("done");
};

//getting the diet list from the database

export const getDietListAndDocument = async (objectOwner) => {
  // const collectionRef = collection(db, "userDietList");
  // const documentRefSnapshot = doc(collectionRef, objectOwner.toLowerCase());
  // const q = query(collectionRef);
  // const querySnapshot = await getDocs(q);
  // const itemMap = querySnapshot.docs.filter(
  //   (e) => e.id === documentRefSnapshot.id
  // );
  // const dietItemMap = itemMap[0].data();
  // return dietItemMap;
  // console.log(dietItemMap);
  // const handleSuccess = (items) => {
  //   console.log(items);
  // };
  // const handleError = (error) => {
  //   console.log(error);
  // };
  // // const userDietListRef = db
  // //   .ref("usersDietList")
  // //   .on("value", handleSuccess, handleError);
  // const userDietListRef = ref(db, "usersDietList").on('value', handleSuccess, )
  // const q = query(collection(db, "usersDietList"));

  // const datas = onSnapshot(q, (querySnapshot) => {
  //   const dataArr = [];
  //   querySnapshot.docs.map((d) => dataArr.push({ ...d.data() }));
  //   return dataArr;
  // });
  // return datas;
  const id = objectOwner.uid;
  const usersDietListRef = collection(db, "usersDietList");
  const q = query(usersDietListRef);

  const querySnapshot = await getDocs(q);

  const dietList = querySnapshot.docs;
  const dietListFilteredData = dietList.filter((e) => e.id === id);
  const dietListData = dietListFilteredData[0].data();
  return dietListData;
};

//creating user document after an authentication to store it on firestore
export const createUserDocFromAuth = async (userAuth, additionalInfos = {}) => {
  if (!userAuth) return;
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
        ...additionalInfos,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //if already exist just return the document reference
  return userDocRef;
};

//registering user with email and password

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//signout instance
export const signOutUser = async () => await signOut(auth);

//observable listener
export const onAuthStateChangedListener = (callback) => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};
