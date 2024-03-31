<template>
    <div>
        <nav>
            <img src="../assets/ajay logo.jpg" alt="Ajay Logo" class="logo">
            <h1 class="heading">Live in</h1>
            <RouterLink to="/"><button class="contact">Blog</button></RouterLink>
          </nav>
        <section>
            <div class="box">
                <div>
                    <img src="../assets/ajay2.png" class="my">
                    <div class="instagram">
                        <img src="../assets/insta.png" class="insta">
                        <a class="vist" href="https://www.instagram.com/_.a_j.a_y_/">https://www.instagram.com/_.a_j.a_y_/</a>
                    </div>
                    <div class="instagram">
                        <img src="../assets/linkedin.png" class="insta">
                        <a class="vist" href="https://www.linkedin.com/in/ajay-priyan-p-b16ab5209/">https://www.linkedin.com/in/ajay-priyan-p-b16ab5209/</a>
                    </div>
                </div>
                <div class="text">
                    <h1 class="name">AJAY<br>PRIYAN P</h1>
                    <p>
                        I'm a student with a passion for utilizing technology to improve business operations. I am constantly exploring new tools and strategies to enhance efficiency and productivity, from software development to data analysis. With a strong foundation in both computer science and business principles, I am confident in my ability to succeed in a variety of settings, from start-up's to established corporations.
                    </p>
                    <p>
                        With expertise in Vue js, I specialize in designing responsive and
                        mobile-friendly websites that adapt to various screen sizes. I stay up-to-date with the latest
                        design trends and technologies to ensure that my clients' websites are modern, engaging, and
                        optimized for performance.
                    </p>
                    <p>
                        If you have a project in mind or want to discuss how I can help you improve your online presence,
                        feel free to get in touch. I'm always excited to work on new and challenging projects.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
    export default {
        
    }
</script>

<style scoped>
section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(to top, rgba(4, 9, 30, 4.7), rgba(4, 9, 30, 0.7)), url(../assets/about_background.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.box{
    min-height: fit-content;
    width: 50vw;
    border: 5px solid white;
    border-radius: 35px;
    color: white;
    padding: 2em 2em;
    position: relative;
    display: flex;
    align-items: center;

}
.my{
    height: 42vh;
    border-radius: 35%;
    margin: 0em 2em;
    transition: 1s;
}
.my:hover{
    scale: 1.08;
}
.name{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 5rem;
    transition: 1s;
}
.name:hover{
    scale: 1.05;
    color: darksalmon;
}
.text p{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 8px;
}
.instagram{
    display: flex;
    align-items: center;
}
.insta{
    width: 3vw;
    padding: 0.5em;
    transition: 1s;
}
.insta:hover{
    scale: 1.2;
}
.vist{
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    transition: 1s;
}
.vist:hover{
    scale: 1.02;
}
/* Responsive styles */

/* For screens smaller than 768px (tablets and phones) */
@media screen and (max-width: 1250px) {
    .box {
        width: 90vw; /* Adjust width for smaller screens */
        padding: 1em; /* Adjust padding for smaller screens */
        border-radius: 25px; /* Adjust border radius for smaller screens */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .my {
        height: 30vh; /* Adjust image height for smaller screens */
        border-radius: 25%; /* Adjust image border radius for smaller screens */
        margin: 0em 1em; /* Adjust margin for smaller screens */
    }

    .name {
        font-size: 3rem; /* Adjust font size for smaller screens */
    }

    .text p {
        font-size: 1rem; /* Adjust font size for smaller screens */
    }

    .insta {
        width: 5vw; /* Adjust image width for smaller screens */
        padding: 0.3em; /* Adjust padding for smaller screens */
    }
}

/* For screens smaller than 480px (small phones) */
@media screen and (max-width: 480px) {
    .box {
        padding: 0.5em; /* Adjust padding for even smaller screens */
        display: flex;
        flex-direction: column;
    }

    .my {
        height: 20vh; /* Adjust image height for even smaller screens */
        margin: 0em 0.5em; /* Adjust margin for even smaller screens */
    }

    .name {
        font-size: 2.5rem; /* Adjust font size for even smaller screens */
    }

    .text p {
        font-size: 1rem; /* Adjust font size for even smaller screens */
    }

    .insta {
        width: 7vw; /* Adjust image width for even smaller screens */
        padding: 0.2em; /* Adjust padding for even smaller screens */
    }
}
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