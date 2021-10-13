// import "firebase/compat/auth"
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const registerUser = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password);