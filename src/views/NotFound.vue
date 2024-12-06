<template>
  <div class="d-flex flex-column align-items-center justify-content-center vh-100">
    <h1 class="display-1 h-20 fw-bold text-success">404</h1>
    <p class="h3 fw-bold">Oups ! Page non trouvée</p>
    <p class="text-center text-secondary">
      Désolé, la page que vous recherchez n'existe pas. Vous pouvez revenir à la page d'accueil ou essayer de naviguer via le
      menu.
    </p>
    <router-link to="/" class="btn btn-success mt-3">
      Retour à l'accueil
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>
