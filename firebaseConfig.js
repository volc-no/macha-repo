import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC14LD9TO-ps_GTOVTv2_IZOyGhOoqEARs",
  authDomain: "machagroupwebapp-96c79.firebaseapp.com",
  projectId: "machagroupwebapp-96c79",
  storageBucket: "machagroupwebapp-96c79.appspot.com",
  messagingSenderId: "40616609712",
  appId: "1:40616609712:web:f3a79f268402b4fb7eb875",
  measurementId: "G-XB38RKBCEX"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

console.log(db);
