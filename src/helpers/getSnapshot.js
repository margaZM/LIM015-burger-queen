import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { query, collection, onSnapshot, orderBy, where } from 'firebase/firestore';

const GetSnapshot = (col, mail) => {
    
    const [querySnap, setQuerySnap] = useState([]);

    useEffect(() => {

        // const getCollection = collection(db, col);
        const q = query(collection(db, col), where("email", "==", mail));

        onSnapshot(q,  (snapshot) => 
            setQuerySnap(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        );
        
    }, [col, mail] );
    return querySnap;
}

export default GetSnapshot