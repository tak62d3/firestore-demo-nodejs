import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

if (!getApps().length) {
    initializeApp({
        credential: applicationDefault()
    });
}

const db = getFirestore();

async function writeDocument() {
    // Specify the collection
    const colRef = db.collection("test");

    // Write data to the collection
    const docRef = colRef.doc();
    await docRef.set({ hello: "world" });

    // Return the created document ID
    return docRef.id;
}

async function readDocument(docId) {
    // Specify the document reference
    const docRef = db.collection("test").doc(docId);

    // Read the document data
    const docSnapshot = await docRef.get();
    if (docSnapshot.exists) {
        return docSnapshot.data();
    } else {
        throw new Error("Document not found");
    }
}

async function main() {
    try {
        const docId = await writeDocument();
        console.log(`Document created with ID: ${docId}`);

        const docData = await readDocument(docId);
        console.log("Document data:", docData);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
