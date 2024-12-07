<template>
    <div class="col-md-4">
        <div class="card mb-4 product-wap rounded-0">
            <div class="card rounded-0">
                <img :src="`/assets/images/perfume/perfume${product.id}.png`"  class="card-img rounded-0 img-fluid" alt="Product Image" />
                <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul class="list-unstyled">
                        <li>
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
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <router-link :to="`/shop/${product.id}`" class="h3 fw-bold text-decoration-none">
                    {{ product.name }}
                </router-link>
                <ul class="list-unstyled d-flex mb-1">
                    <li v-for="(volume, index) in product.volumes" :key="index">
                        {{ volume }}<span v-if="index < product.volumes.length - 1">&emsp;/&emsp;</span>
                    </li>
                </ul>

                <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                        <i v-for="index in 5" :key="index"
                            :class="index <= product.rating ? 'text-warning fa fa-star' : 'text-muted fa fa-star'"></i>
                    </li>
                </ul>


                <p class="text-center mb-0 bg-success text-white">{{ product.price }} DH</p>
            </div>
        </div>
    </div>
</template>

<script>
import contactData from '@/data/contact.json';

export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    computed: {
        whatsappNumber() {
            // Get the phone number dynamically from contact.json
            return contactData.whatsapp || '212610101010'; // Default fallback number
        },
    },
    methods: {
        getWhatsAppLink(product) {
            // Generate a professional message for WhatsApp
            const message = `Bonjour, 
  
  Je suis intéressé(e) par le produit suivant :
  - **Nom** : ${product.name}
  - **Prix** : ${product.price} USD
  - **Image** : ${window.location.origin}${product.image}
  
  Pouvez-vous me donner plus de détails ? Merci beaucoup.`;

            // Encode the message to fit the WhatsApp URL format
            return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
                message
            )}`;
        },
    },
};
</script>

<style scoped>
/* General Card Styling */
.card {
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

/* Card Image */
.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.card:hover .card-img {
    transform: scale(1.05);
}

/* Overlay Styling */
.card-img-overlay {
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card:hover .card-img-overlay {
    opacity: 1;
}

.card-img-overlay ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.card-img-overlay ul li {
    margin-bottom: 10px;
}

.card-img-overlay .btn {
    border-radius: 20px;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.card-img-overlay .btn:hover {
    background-color: #218838;
    transform: translateY(-2px);
}

/* Card Body */
.card-body {
    text-align: center;
    padding: 1.5rem;
    background-color: #fff;
}

.card-body .h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #343a40;
    margin-bottom: 0.75rem;
    text-decoration: none;
}

.card-body .h3:hover {
    color: #28a745;
}

.card-body ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-body ul li {
    display: inline-block;
    font-size: 0.9rem;
    color: #6c757d;
}

.card-body ul li i {
    margin-right: 2px;
}

/* Price Styling */
.card-body p {
    font-size: 1.1rem;
    font-weight: bold;
    color: #28a745;
    margin-top: 0.75rem;
}
</style>

