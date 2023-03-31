import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "@firebase/auth";
import { auth } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { storage } from "../../firebase/config";


// import firebase from "firebase/app";
// import "firebase/auth"; // Add the Firebase services that you want to use
// import "firebase/firestore";
// import "firebase/storage";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// import {
//   getFirestore,
//   collection,
//   doc,
//   setDoc,
//   serverTimestamp,
// } from "firebase/firestore";

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, login, avatar }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // console.log("avatar", avatar);
      // Create a reference to the user's profile image in Firebase Cloud Storage
      const storageRef = ref(storage, `authImage/${user.uid}`);
      const response = await fetch(avatar);
      const file = await response.blob();
      // Upload the profile image to Firebase Cloud Storage
      await uploadBytes(storageRef, file);

      // Get the download URL for the uploaded file
      const downloadURL = await getDownloadURL(storageRef);

      // Set additional user data in Cloud Firestore

      await updateProfile(user, { displayName: login, photoURL: downloadURL });

      // console.log(
      //   "User successfully created, profile image uploaded to Firebase Cloud Storage, and data saved to Cloud Firestore"
      // );
      // console.log("register", user);

      return user;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const signIn = await signInWithEmailAndPassword(auth, email, password);
      // console.log("login", signIn.user);
      return signIn.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const logOut = await signOut(auth);
    return logOut;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authStateChange = createAsyncThunk(
  "auth/refresh",
  async (user, thunkAPI) => {
    try {
      if (user) return user;
      throw new Error("Unathorized");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
