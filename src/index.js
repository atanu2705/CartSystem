import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmAZ-RhQeLXQplsAZ76HnTfzm-4blx_BQ",
  authDomain: "cart-82b54.firebaseapp.com",
  projectId: "cart-82b54",
  storageBucket: "cart-82b54.appspot.com",
  messagingSenderId: "197846463439",
  appId: "1:197846463439:web:6b893868402288506a98ba"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
