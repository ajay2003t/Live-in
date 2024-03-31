<template>
  <div>
    <section>
      <div class="main">
        <div class="card" v-if="show" v-for="(imagePath) in imageUrls">
          <img :src="imagePath" class="blogimage">
        </div>
      </div>
      <div class="upload">
        <button v-show="upload" @click="insert">Upload</button>
        <button v-show="close" @click="hidden">Close</button>
        <div v-show="close">
          <input type="password" placeholder="enter password" v-model="enterpassword">
          <button @click="enter">Submit</button>
        </div>
        <input type="file" @change="handleFileUpload" v-show="upl">
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, push, onValue } from 'firebase/database';

export default {
  data() {
    return {
      imageUrls: [],
      upload: true,
      close: false,
      enterpassword:'',
      password:''
    };
  },
  computed: {
    show() {
      if (this.imageUrls == 0) {
        return false
      }
      else {
        return true
      }
    },
    upl(){
      if(this.password=='ajay7890'){
        return true
      }
      else{
        return false
      }
    }
  },
  methods: {
    insert(){
      this.upload=false
      this.close=true
    },
    hidden(){
      this.upload=true
      this.close=false
    },
    enter(){
      this.password=this.enterpassword
    },
    async handleFileUpload(event) {
      const file = event.target.files[0];
      const storage = getStorage();
      const storageRefInstance = storageRef(storage, 'images/' + file.name);
      await uploadBytes(storageRefInstance, file);
      const imageUrl = await getDownloadURL(storageRefInstance);
      this.imageUrls.push(imageUrl);

      // Save the image URL to Realtime Database
      const db = getDatabase();
      const imagesRef = dbRef(db, 'images');
      push(imagesRef, imageUrl);
    }
  },
  created() {
    const db = getDatabase();
    const imagesRef = dbRef(db, 'images');
    onValue(imagesRef, (snapshot) => {
      this.imageUrls = Object.values(snapshot.val() || {});
    });
  },
};
</script>

<style scoped>
/* Default styles */

section {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(to top, rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(../assets/blog_background2.png);
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  margin: 0;
  padding: 0;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  max-width: max-content;
  background-color: gainsboro;
  margin: 2rem;
  margin-top: 10vh;
  transition: 1s;
}

.card:hover {
  scale: 1.1;
}

.blogimage {
  height: 35vh;
}

.upload {
  width: 100%;
  height: 8vh;
  background-color: papayawhip;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

button {
  padding: 0.5em 2em;
  background-color: skyblue;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  border: none;
  border-radius: 22px;
  font-size: 1rem;
  color: black;
  transition: all 0.3s ease-in-out;
  margin: 2em;
}

button:hover {
  background-color: darkblue;
  color: white;
  transform: scale(1.1);
}

/* Responsive styles */

@media screen and (max-width: 768px) {
  .card {
    width: 50%; /* Display two cards per row */
    margin: 1rem;
  }

  .upload {
    height: 6vh;
  }
  .blogimage {
    height: 15vh;
  }

  button {
    padding: 0.3em 1.5em;
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 480px) {
  .card {
    width: 50%; /* Display two cards per row */
    margin: 0.5rem;
  }

  .blogimage {
    height: 16vh;
  }

  .upload {
    height: 5vh;
  }

  button {
    padding: 0.2em 1em;
    font-size: 0.7rem;
  }
}

</style>