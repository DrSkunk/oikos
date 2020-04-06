import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initalize and export Firebase.
const config = {
  apiKey: 'AIzaSyA2Gllzx6Nrq32n3WdEBiWdTP0jG0a4swk',
  authDomain: 'oikos-game.firebaseapp.com',
  databaseURL: 'https://oikos-game.firebaseio.com',
  projectId: 'oikos-game',
  storageBucket: 'oikos-game.appspot.com',
  messagingSenderId: '996454215912',
};
class Firebase {
  constructor(gameId) {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  set gameId(gameId) {
    this.ref = this.db.ref('games').child(gameId);
  }
}
export default new Firebase();
