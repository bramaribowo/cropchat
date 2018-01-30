import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyB7jEaxdoFnV-UR0tbaYt0fHu4ujeODPSg',
  authDomain: 'cropchat-1234.firebaseapp.com',
  databaseURL: 'https://cropchat-1234.firebaseio.com',
  projectId: 'cropchat-1234',
  storageBucket: 'cropchat-1234.appspot.com',
  messagingSenderId: '276160026635'
}
firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
