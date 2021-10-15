import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailLink,
  onAuthStateChanged,
  sendEmailVerification
} from 'firebase/auth';

export const registerUser = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (auth, email, password) => signInWithEmailAndPassword(auth, email, password);

export const resetPassword = (email) => sendPasswordResetEmail(email);

export const confirmEmail = (auth, email, href) => signInWithEmailLink(auth, email, href);

export const watcherAuthentication = (auth) => onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

export const verifyEmail = (user) => sendEmailVerification(user);