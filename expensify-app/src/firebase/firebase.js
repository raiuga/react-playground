import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   })

// //   console.log(expenses);

// // });

// // const expenses = [{
// //   description: 'Gum',
// //   note: '',
// //   amount: 195,
// //   createdAt: 0
// // }, {
// //   description: 'Rent',
// //   note: '',
// //   amount: 109500,
// //   createdAt: 1
// // }, {
// //   description: 'Credit Card',
// //   note: '',
// //   amount: 4500,
// //   createdAt: 2
// // }];

// // database.ref('expenses').push(expenses[0]);
// // database.ref('expenses').push(expenses[1]);
// // database.ref('expenses').push(expenses[2]);

// // database.ref('notes').push({
// //   title: 'Todo',
// //   body: 'Another thing'
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   const results = snapshot.val();
// //   console.log(`${results.name} is a ${results.job.title} at ${results.job.company}`);
// // });


// // database.ref().once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data');
// //   });


// // database.ref().set({
// //   name: 'João Aguiar',
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Lisbon',
// //     country: 'Portugal'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // })

// // database.ref().remove()
// //   .catch(err => {
// //     console.log('error when trying to remove isSingle');
// //   });
