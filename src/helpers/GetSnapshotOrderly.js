import { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore'

const GetSnapshotOrderly = ( col, property, condition ) => {
    
    const [querySnap, setQuerySnap] = useState([]);

    useEffect(() => {

        const getCollection = collection(db, col);
        const q = query(getCollection, orderBy(property, condition));

        onSnapshot(q,  (snapshot) => 
            setQuerySnap(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        );
        
    }, [col, property, condition ] );
    return querySnap;
}

export default GetSnapshotOrderly