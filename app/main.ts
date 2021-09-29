import './polyfills';

import { initializeApp } from "firebase/app";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherise, log the boot error
}).catch(err => console.error(err));

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB86A2ANK4MZZ70gcxZ0KJKPqVVjtb3chg",
  authDomain: "my-project-1606234050751.firebaseapp.com",
  databaseURL: "https://my-project-1606234050751-default-rtdb.firebaseio.com",
  projectId: "my-project-1606234050751",
  storageBucket: "my-project-1606234050751.appspot.com",
  messagingSenderId: "802940266368",
  appId: "1:802940266368:web:3ba875404b976c8d140365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);