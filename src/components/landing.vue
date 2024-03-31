<template>
    <div>
      <nav>
        <img src="../assets/ajay logo.jpg" alt="Ajay Logo" class="logo">
        <h1 class="heading">Live in</h1>
        <RouterLink to="/about"><button class="contact">About</button></RouterLink>
      </nav>
        <section class="landing">
            <h1 class="write">Read quality, all the time, <br><span>every day</span></h1>
            <button class="down" @click="click($event)" v-if="open">Click Me</button>
            <button class="down" v-if="close">Scroll down</button>
          </section>
          <section>
            <component :is="comp"></component>
          </section> 
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
    export default {
  data() {
    return {
      comp: '',
      open:true,
      close:false
    }
  },
  methods: {
    click(event) {
      event.preventDefault()
      this.comp = 'blog'
      this.open=false
      this.close=true
    }
  }
}
</script>

<style scoped>
/* Base styles for all devices */
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /* Set a default font for consistency */
}

nav {
  position: sticky;
  background-color: papayawhip;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

.logo {
  min-height: fit-content;
  max-width: 80px;
  /* Adjust as needed, considering aspect ratio */
  border-radius: 50%;
  margin: 1em 0;
  transition: transform 1s ease-in-out;
  /* Smoother transition */
}

.logo:hover {
  transform: scale(1.1) rotate(360deg);
  /* Combined hover effect */
}

.contact {
  padding: 0.5em 2em;
  background-color: skyblue;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  border: none;
  border-radius: 22px;
  font-size: 1rem;
  color: black;
  transition: all 0.3s ease-in-out;
  /* Faster, smoother hover effect */
}

.contact:hover {
  background-color: darkblue;
  color: white;
  transform: scale(1.1);
  /* Subtler scale on hover */
}

.heading {
  color: wheat;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 4rem;
  background-color: black;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  /* Smoother hover effect */
}

.heading:hover {
  transform: scale(1.1);
  /* Very subtle scale on hover */
}

/* Media queries for responsive adjustments */
@media (max-width: 768px) {

  /* Tablet and mobile styles */
  .heading {
    font-size: 2.5rem;
    margin-left: 1em;
    margin-right: 1em;
  }

  .logo {
    max-width: 60px;
    /* Adjust logo size for smaller screens */
  }
}

@media (max-width: 480px) {

  /* Mobile-specific styles */
  nav {
    flex-wrap: wrap;
    /* Wrap content on very small screens */
    justify-content: center;
    /* Center elements on single line */
  }

  .contact {
    width: 100%;
    /* Add spacing between elements on single line */
  }
}
</style>