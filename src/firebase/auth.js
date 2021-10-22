import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailLink,
  onAuthStateChanged,
  sendEmailVerification,
  signOut
} from 'firebase/auth';

// función para registrarse con email
export const registerUser = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password);

// función para loguearse con email
export const loginUser = (auth, email, password) => signInWithEmailAndPassword(auth, email, password);

// función para resetear contraseña
export const resetPassword = (auth, email) => sendPasswordResetEmail(auth, email);

export const confirmEmail = (auth, email, href) => signInWithEmailLink(auth, email, href);

// observador de firebase
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

// verificador de correo
export const verifyEmail = (user) => sendEmailVerification(user);

// cerrar Sesión
export const logOut = (auth) => signOut(auth);
