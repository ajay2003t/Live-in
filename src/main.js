import "./assets/main.css";

import { createApp } from "vue";
import router from "./router/router";
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import blog from "./components/blog.vue";
import App from "./App.vue";

const app = createApp(App);
app.component("blog", blog);
app.use(router)
app.mount("#app");

const firebaseConfig = {
  apiKey: "AIzaSyCNYTsZjm8d8GSP0xdPFPKf9rEN7nzWu2U",
  authDomain: "blog-1737e.firebaseapp.com",
  databaseURL: "https://blog-1737e-default-rtdb.firebaseio.com",
  projectId: "blog-1737e",
  storageBucket: "blog-1737e.appspot.com",
  messagingSenderId: "54862070330",
  appId: "1:54862070330:web:923815b0f6f0e48b1bab03",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get the Firebase Storage instance
const storage = getStorage(firebaseApp);

import { getDatabase, ref as dbRef, push, onValue } from 'firebase/database';

const db = getDatabase();
const imagesRef = dbRef(db, 'images');

