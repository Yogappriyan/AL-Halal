import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

// Safe environment or placeholder config
const metaEnv = (import.meta as any)?.env || {};
const firebaseConfig = {
  apiKey: metaEnv.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_PROJECT.firebaseapp.com",
  projectId: metaEnv.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_SENDER_ID",
  appId: metaEnv.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== 'YOUR_API_KEY' &&
  firebaseConfig.projectId !== 'YOUR_PROJECT_ID'
);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    console.log('[ITALIA SHOES] Firebase successfully initialized with Cloud backend.');
  } catch (error) {
    console.warn('[ITALIA SHOES] Firebase init error, falling back to client showroom mode:', error);
  }
} else {
  console.info('[ITALIA SHOES] Firebase running in Showroom Demo & LocalStore Mode. Configure real Firebase keys in Settings when ready.');
}

export const googleProvider = new GoogleAuthProvider();
export { app, auth, db, storage, firebaseConfig };
