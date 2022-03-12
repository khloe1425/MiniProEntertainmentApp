
const serviceAccount = {
    "type": process.env.type,
    "project_id": process.env.project_id,
    "private_key_id": process.env.private_key_id,
    "private_key": process.env.private_key,
    "client_email": process.env.client_email,
    "client_id": process.env.client_id,
    "auth_uri": process.env.auth_uri,
    "token_uri": process.env.token_uri,
    "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
    "client_x509_cert_url": process.env.client_x509_cert_url
}

  console.log(process.env.type)
// // Initialize Firebase

const firebase = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');


if (!firebase.apps.length) {

    firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount)
    });
} else {
    firebase.app(); // if already initialized, use that one
}
export const db = getFirestore();
export const GOOGLE_CLIENT_KEY = "326373075627-pj9sqn47odp873vjo0qjrpoekmfue9hq.apps.googleusercontent.com"
export const JWT_SECRET = ""
export const BASE_URL = process.env.PUBLIC_URL || "http://localhost/3000"
