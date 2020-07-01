import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase,firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

import notifyReducer  from './reducer/notifyReducer';
import settingsReducer  from './reducer/settingsReducer';

const fireBaseConfig = {
    apiKey: "AIzaSyDiz61a1JXFSyXAXxr_ORTJ6khqsJVdPO4",
    authDomain: "clientpanel-930fd.firebaseapp.com",
    databaseURL: "https://clientpanel-930fd.firebaseio.com",
    projectId: "clientpanel-930fd",
    storageBucket: "clientpanel-930fd.appspot.com",
    messagingSenderId: "189289296669",
    appId: "1:189289296669:web:d54f92f01308aacdba67f4",
    measurementId: "G-7TLVQLYML3"
  };

  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
  };

  firebase.initializeApp(fireBaseConfig);
  const fireStore = firebase.firestore();

  const createStoreWithFirebase = compose(
      reactReduxFirebase(firebase, rrfConfig),
      reduxFirestore(firebase)
  )(createStore);

  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify : notifyReducer,
    settings : settingsReducer
  });

  if(localStorage.getItem('settings') == null){
    const defaultSettings = {
      disableBalanceOnAdd : false,
      disableBalanceOnEdit : false,
      allowRegistration : true
    }

    localStorage.setItem('settings', JSON.stringify(defaultSettings))
  }
  const initialState = {settings : JSON.parse(localStorage.getItem('settings'))};

  const store = createStoreWithFirebase(
      rootReducer, 
      initialState, 
      compose(
      reactReduxFirebase(firebase),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
