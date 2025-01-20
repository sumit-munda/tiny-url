import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createContext, useContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

import { useToast } from "./Toast";

// create context
const FirebaseContext = createContext(null);

// use context
const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(firebaseApp);

// context provider
const FirebaseProvider = (props) => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const toast = useToast();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
			if (user) {
				console.log(user, " has logged in.");
				setUser(user);
				setIsLoggedIn(true);
			} else if (!user) {
				console.log(user, " has logged out.");
				setUser(null);
				setIsLoggedIn(false);
			}
		});

		return unsubscribe;
	}, []);

	// fun1
	const signupWithEmailAndPassword = (email, password) => {
		createUserWithEmailAndPassword(firebaseAuth, email, password);
	};

	// fun2
	const signinWithEmailAndPassword = (email, password) => {
		signInWithEmailAndPassword(firebaseAuth, email, password);
	};

	// fun3
	const signinWithGoogle = () => {
		signInWithPopup(firebaseAuth, googleProvider);
	};

	// fun4
	const handleLogout = async () => {
		try {
			await signOut(firebaseAuth);
			setIsLoggedIn(false);
		} catch (error) {
			toast.error("sign out error: ", error);
		}
	};
	return (
		<FirebaseContext.Provider
			// context values
			value={{
				signupWithEmailAndPassword,
				signinWithEmailAndPassword,
				signinWithGoogle,
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
				handleLogout,
			}}>
			{props.children}
		</FirebaseContext.Provider>
	);
};

export { useFirebase, FirebaseProvider, firebaseApp, firebaseAuth };
