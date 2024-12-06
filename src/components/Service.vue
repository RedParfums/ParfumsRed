<template>
    <section class="container py-5">
      <div class="row text-center pt-5 pb-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">{{ sectionTitle }}</h1>
          <p>{{ sectionDescription }}</p>
        </div>
      </div>
  
      <div class="row">
        <div v-for="(service, index) in services" :key="index" class="col-md-6 col-lg-3 pb-5">
          <div class="h-100 py-5 services-icon-wap shadow rounded">
            <div class="h1 text-success text-center">
              <i :class="service.icon"></i>
            </div>
            <h2 class="h5 mt-4 text-center">{{ service.title }}</h2>
            <p class="text-center">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sectionTitle: 'Nos Services',
        sectionDescription: `Nous proposons une gamme de services conçus pour répondre à tous vos besoins. De la livraison rapide
                              à un excellent support client, nous sommes là pour rendre votre expérience fluide et agréable.`,
        services: [
          {
            title: 'Services de Livraison',
            description: 'Livraison rapide et fiable directement chez vous.',
            icon: 'fa fa-truck fa-lg'
          },
          {
            title: 'Expédition & Retours',
            description: 'Options d\'expédition faciles avec retours sans tracas.',
            icon: 'fas fa-exchange-alt'
          },
          {
            title: 'Promotions',
            description: 'Profitez d\'offres incroyables et de réductions sur nos produits.',
            icon: 'fa fa-percent'
          },
          {
            title: 'Service 24/7',
            description: 'Bénéficiez d\'un support à tout moment, jour et nuit, pour toutes vos demandes.',
            icon: 'fa fa-user'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles for the services section if needed */
  </style>
  