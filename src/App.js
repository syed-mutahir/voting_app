import React,{Component} from 'react';
import Routes from './Home/Routes';
import firebase from 'firebase';

class App extends Component{

  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBfGbVS0TsUaBROUZDDm8N6PGvRJ2abyr4",
      authDomain: "votingapp-20553.firebaseapp.com",
      databaseURL: "https://votingapp-20553.firebaseio.com",
      projectId: "votingapp-20553",
      storageBucket: "votingapp-20553.appspot.com",
      messagingSenderId: "263453901",
      appId: "1:263453901:web:da5158a2c9be36b1b4bd84",
      measurementId: "G-FNE3YYHXNG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  render(){
    return (
      <div>
        <Routes />
      </div>
    );
  }
}


export default App;
