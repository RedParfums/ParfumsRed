<template>
  <section class="bg-light">
    <div class="container py-5">
      <div class="row text-center py-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">Produit Vedette</h1>
          <p>
            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
      <div class="row">
        <div v-for="product in featuredProducts" :key="product.id" class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <img :src="`/src/assets/images/gallery/gallery${product.id}.jpg`" class="card-img-top" alt="...">

            <div class="card-body">
              <ul class="list-unstyled d-flex justify-content-between">
                <li>
                  <i v-for="star in 5" :key="star" class="fa"
                    :class="star <= product.rating ? 'text-warning fa-star' : 'text-muted fa-star'"></i>
                </li>
                <li class="text-muted text-right">{{ product.price.toFixed(2) }} DH</li>
              </ul>
              <a class="h2 text-decoration-none text-dark">
                {{ product.name }}
              </a>
              <p class="card-text">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Assuming product.json is in the 'public' folder or it can be imported dynamically
import productsData from '@/data/featuredProduct.json'; // Adjust the path if needed

// Filter products for those that have "featuredProduct" set to true
const featuredProducts = ref(productsData.filter(product => product.featuredProduct).slice(0, 3));
</script>