import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB7WnQAsZwJ33UjGtWlR2wGvDnnwM95wzQ",
    authDomain: "fit-4-you-aa7ee.firebaseapp.com",
    databaseURL: "https://fit-4-you-aa7ee.firebaseio.com",
    projectId: "fit-4-you-aa7ee",
    storageBucket: "fit-4-you-aa7ee.appspot.com",
    messagingSenderId: "73868665703",
    appId: "1:73868665703:web:673f72b6b87db5d5b805c2",
    measurementId: "G-EQQM1TLDQ4"
};



class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName;
    }

}
 export default new Firebase();