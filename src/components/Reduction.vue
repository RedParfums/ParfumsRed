<template>
    <section class="container py-5">
        <div class="row align-items-center">
            <!-- Sale Product Image -->
            <div class="col-md-6">
                <img src="/public/assets/images/salePerfume.png" class="img-fluid" alt="Sale Perfume" />
            </div>
            <!-- Sale Content -->
            <div class="col-md-6 text-center text-end">
                <p class="fs-4 fw-bold text-uppercase text-success">{{ sold.title }}</p>
                <h3 class="sale-txt fw-bold mb-4">
                    {{ sold.text }}
                </h3>
                <router-link to="/shop" class="btn btn-success btn-lg">
                    Achetez Maintenant
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import sold from '@/data/solde.json'

export default {
  data() {
    return {
      sold
    }
  }
};
</script>