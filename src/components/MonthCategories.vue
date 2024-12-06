<template>
    <section class="container py-5">
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Catégories du Mois</h1>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        <div class="row">
            <div v-for="product in monthProducts" :key="product.id" class="col-12 col-md-4 p-5 mt-3">
                <a :href="`shop/${product.id}`">
                    <img :src="product.image_url" class="rounded-circle img-fluid border" :alt="product.name" />
                </a>
                <h5 class="text-center mt-3 mb-3">{{ product.name }}</h5>
                <p class="text-center">
                    <router-link to="/shop" class="btn btn-success">
                        Allez à la boutique
                    </router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Assuming product.json is in the 'public' folder or it can be imported dynamically
import productsData from '@/data/products.json'; // Adjust the path if needed

// Filter products for those that have "monthCategories" set to true
const monthProducts = ref(productsData.filter(product => product.monthCategories).slice(0, 3));
</script>