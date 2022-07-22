import { initializeApp, cert } from 'firebase-admin/app'
import {getFirestore } from "firebase-admin/firestore"
import {credentials} from './credentials.js'

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

const car = {
    make:"BMW",
    model:"M3",
    year: 2020,
    color:'Blue'
}

db.collection('cars').add(car)