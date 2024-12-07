<template>
    <section class="bg-success py-5">
      <div class="container">
        <div class="row align-items-center py-5">
          <div class="col-md-8 text-white">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
          </div>
          <div class="col-md-4">
            <img src="/public/images/AU.png" alt="Image de notre histoire" class="img-fluid" style="height: auto; max-width: 100%; max-height: 500px;">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'À propos de nous',
        description: `Nous sommes dédiés à fournir les meilleurs services de l'industrie. Notre équipe s'engage à l'excellence, garantissant la plus haute qualité et la satisfaction de nos clients. Que vous soyez ici pour nos produits ou services, nous nous efforçons de dépasser vos attentes à chaque fois.`,
      };
    }
  };
  </script>