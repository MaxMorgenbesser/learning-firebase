import { initializeApp, cert } from 'firebase-admin/app'
import {getFirestore } from "firebase-admin/firestore"
import {credentials} from './credentials.js'

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

const car = {
    make:"Ferarri",
    model:"GTO",
    year: 2008,
    color:'Red'
}

// db.collection('cars').add(car) // adds car
// .then(doc => { //adds document
//     console.log('Doc added:', doc.id)
// })
// //handle the error
// .catch(err => console.error(err))

//promises
//getName().then(name)


//.set only adds it once and will change existing object if object below is changes and ran again
// db.collection('cars').doc('lambo')
// .set({make: 'Lambo', model:'Diablo', year: 2020, color:'yellow'})
// .then(doc => {
//     console.log('This only adds it once')
// })
// .catch(err=>console.error("Error",err))

// db.collection('cars').doc('lambo')
// .update({model:'Diablo',color: 'hot pink'})


// get a single document
// db.collection('cars').doc('lambo').get()
// .then(doc => {
//     console.log(doc.data())
//     console.log(doc.id)
// })
// .catch(console.error)

// db.collection('cars').get()
// .then(collection =>{
//     collection.docs.forEach(doc => console.log(doc.data()))
// })
// .catch(console.error)

//  query docs from collection
db.collection('cars').where('year','>=',2010).get()
.then(collection => {
    const cars = collection.docs.map(doc => {
        let car = doc.data()
        car.id=doc.id
        doc.data()
        return car})
    console.log(car)
})
.catch(console.error)

