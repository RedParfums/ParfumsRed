<template>
    <!-- En-tête -->
    <nav class="navbar navbar-expand-lg navbar-light shadow bg-white">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Marque avec logo -->
        <router-link class="navbar-brand d-flex align-items-center text-success logo h1" to="/">
          <img
            src="/public/images/logo.png"
            alt="Logo Red Parfums"
            class="me-2"
            style="width: 80px; height: 80px;"
          />
          <!-- <span class="ms-2">R_Parfums</span> -->
        </router-link>
  
        <!-- Bouton pour mobile -->
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Liens du menu -->
        <div
          class="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
          id="templatemo_main_nav"
        >
          <div class="flex-fill">
            <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Accueil</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/shop">Boutique</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">À propos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- Fermeture de l'en-tête -->
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  