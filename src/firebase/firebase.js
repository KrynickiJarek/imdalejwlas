// import app from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAq7XAXwgOQKDpnCIgOsUYGJvtcTkn3RPo",
//     authDomain: "imdalejwlaspytania.firebaseapp.com",
//     databaseURL: "https://imdalejwlaspytania.firebaseio.com",
//     projectId: "imdalejwlaspytania",
//     storageBucket: "imdalejwlaspytania.appspot.com",
//     messagingSenderId: "353846225902",
//     appId: "1:353846225902:web:7b25ebeea303f22d4c7cff",
//     measurementId: "G-JGP2GF1LFV"
// };
// Initialize Firebase
// class Firebase {
//     private auth: any;
//     private db: any;
//     constructor(){
//         app.initializeApp(config);
//
//         this.auth = app.auth();
//         this.db = app.database();
//     }
//     // AUTH API //
//     doCreateUserWithEmailAndPassword = (email :string, password : string) =>
//         this.auth.createUserWithEmailAndPassword(email, password);
//
//     doSignInWithEmailAndPassword = (email :string, password:string) =>
//         this.auth.signInWithEmailAndPassword(email, password);
//
//     doSignOut = () => this.auth.signOut();
//
//     doPasswordReset = (email : string) => this.auth.sendPasswordResetEmail(email);
//
//     doPasswordUpdate = (password : string ) =>
//         this.auth.currentUser.updatePassword(password);
//
//     // USER API //
//
//     user = (uid :any) => this.db.ref(`users/${uid}`);
//
//     users = () => this.db.ref('users');
//
//
//
// }
// export default Firebase