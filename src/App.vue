<template>
  <div>
    <router-view></router-view>
    <footer>
      <div class="container">
        <p>&copy; 2024 AjAy - Web Designer. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {

}
</script>

<style>
/* Default styles */
* {
  margin: 0;
}

.landing {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(to top, rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(./assets/blog_background.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.write {
  position: absolute;
  top: 40%;
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 4rem;
  margin: 0em 1em;
  font-weight: bolder;
}

.write span {
  font-size: 8rem;
  color: beige;
  transition: 1s;
}

.write span:hover {
  color: darksalmon;
}

.down {
  position: absolute;
  top: 74%;
  margin: 0em 6em;
  padding: 0.5em;
  background-color: skyblue;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  width: 10em;
  height: 4em;
  border: white;
  border-radius: 22px;
  font-size: 1rem;
  transition: 1s;
}

.down:hover {
  scale: 1.1;
  background-color: darkblue;
  color: white;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

/* Responsive styles */
@media (max-width: 768px) {
  .write {
    font-size: 3rem;
  }

  .write span {
    font-size: 6rem;
  }

  .down {
    margin: 0em 3em;
    width: 8em;
    height: 3em;
  }
}

@media (max-width: 480px) {
  .write {
    font-size: 2rem;
  }

  .write span {
    font-size: 4rem;
  }

  .down {
    margin: 0em 2em;
    width: 8em;
    height: 2.5em;
  }
}
</style>