import * as fConfig  from 'firebase';

let config = {
    apiKey: "AIzaSyB03SN3vVnKhlYpE9RXXFWxczgOrGyKK2I",
    authDomain: "belajar-firebase3-2a94e.firebaseapp.com",
    databaseURL: "https://belajar-firebase3-2a94e.firebaseio.com",
    projectId: "belajar-firebase3-2a94e",
    storageBucket: "belajar-firebase3-2a94e.appspot.com",
    messagingSenderId: "2158816946"
};

let fbConfig = fConfig.initializeApp(config);

export {fbConfig}
