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
export const watcherAuthentication = (auth) => onAuthStateChanged(auth, (user) => user);

// verificador de correo
export const verifyEmail = (user) => sendEmailVerification(user);

// cerrar Sesión
export const logOut = (auth) => signOut(auth);
