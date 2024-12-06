<template>
    <section class="bg-light py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 mt-5">
                    <div class="card mb-3 text-center d-flex justify-content-center align-items-center">
                        <img class="" :src="product.image_url" alt="Perfume image"
                            style="height: 500px; width: 350px; object-fit: cover;">
                    </div>
                </div>

                <!-- Product Details -->
                <div class="col-lg-7 mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="h2">{{ product.name }}</h1>
                            <p class="h3 py-2">{{ product.price }} DH</p>

                            <!-- Brand -->
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6>Brand:</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><strong>{{ product.brand }}</strong></p>
                                </li>
                            </ul>

                            <!-- Description -->
                            <h6>Description:</h6>
                            <p>{{ product.description }}</p>

                            <!-- Volume -->
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6>Volume:</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted">
                                        <strong>
                                            <!-- Display volumes as a single string -->
                                            {{ product.volumes.join('&emsp;/&emsp;') }}
                                        </strong>
                                    </p>
                                </li>
                            </ul>

                            <!-- Category -->
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6>Category:</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><strong>{{ product.category }}</strong></p>
                                </li>
                            </ul>

                            <!-- WhatsApp Request Button -->
                            <form :action="getWhatsAppLink(product)" method="get" target="_blank">
                                <div class="row pb-3">
                                    <div class="col d-grid">
                                        <button type="submit" class="btn btn-success btn-lg">
                                            <i class="fas fa-cart-plus"></i>
                                            Demander
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'ProductContent',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    whatsappNumber() {
      return '212610101010';
    },
  },
  methods: {
    getWhatsAppLink(product) {
      const message = `Bonjour,

      Je suis intéressé(e) par le produit suivant :
      - **Nom** : ${product.name}
      - **Prix** : ${product.price} DH
      - **Image** : ${window.location.origin}${product.image_url}

      Pouvez-vous me donner plus de détails ? Merci beaucoup.`;

      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
  },
};
</script>


<style scoped>
/* Custom styles for Product Page */
.card-img {
    object-fit: cover;
}

.card-body h1,
.card-body p {
    color: #343a40;
    /* Dark color for text */
}

.list-inline-item h6 {
    font-size: 1rem;
    color: #495057;
    /* Lighter text color for labels */
}

.list-inline-item p {
    font-size: 1rem;
}

button.btn-success {
    background-color: #28a745;
    border: none;
    transition: background-color 0.3s ease;
}

button.btn-success:hover {
    background-color: #218838;
}

button.btn-lg {
    padding: 10px 20px;
}

.row.pb-3 {
    padding-bottom: 15px;
}
</style>