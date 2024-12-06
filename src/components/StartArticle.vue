<template>
    <section class="py-5">
        <div class="container">
            <div class="row text-left p-2 pb-3">
                <h4>Related Products</h4>
            </div>
            <!--Start Carousel Wrapper-->
            <div id="carousel-related-product">
                <!-- Navigate to the product route when a product is clicked -->
                <Card
                    v-for="product in relatedProducts"
                    :key="product.id"
                    :product="product"
                    @click.native="navigateToProduct(product.id)"
                />
            </div>
        </div>
    </section>
</template>

<script>
import Card from '@/components/card.vue';
import productData from '@/data/products.json';

export default {
    components: {
        Card,
    },
    data() {
        return {
            productData,
            product: {},
        };
    },
    created() {
        const productId = parseInt(this.$route.params.id);
        // Find the current product by id
        this.product = productData.find(product => product.id === productId) || {};

        // Filter related products based on the brand or category
        this.relatedProducts = this.productData.filter(p =>
            (p.brand === this.product.brand || p.category === this.product.category) && p.id !== this.product.id
        );
    },
    methods: {
        navigateToProduct(productId) {
            // Navigate to the route of the clicked product
            this.$router.push({ name: 'ShopSingle', params: { id: productId } });
        },
    },
};
</script>


<style scoped>
/* Section styling */
section.py-5 {
    background-color: #f8f9fa; /* Light grey background for contrast */
    padding: 3rem 0; /* Add padding for better spacing */
    border-top: 1px solid #ddd; /* Subtle divider */
}

/* Section Title */
.row.text-left h4 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #343a40; /* Dark color for better visibility */
    margin-bottom: 1rem;
    border-left: 4px solid #28a745; /* Add a blue accent */
    padding-left: 10px;
}

/* Carousel container */
#carousel-related-product {
    display: flex;
    gap: 1.5rem; /* Add spacing between items */
    overflow-x: auto;
    scroll-behavior: smooth; /* Smooth scrolling for user experience */
    padding: 1rem 0;
}

/* Hide scrollbar */
#carousel-related-product::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Edge */
}
#carousel-related-product {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

/* Card Styling */
#carousel-related-product .card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    flex-shrink: 0;
    width: 250px; /* Set consistent card width */
    overflow: hidden;
}

/* Card Hover Effect */
#carousel-related-product .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

/* Card Image */
#carousel-related-product .card img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    max-height: 180px;
    object-fit: cover; /* Ensure images are properly cropped */
    width: 100%;
}

/* Card Content */
#carousel-related-product .card .card-body {
    padding: 1rem;
    text-align: center;
}

/* Card Title */
#carousel-related-product .card .card-title {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* Truncate long titles */
}

/* Card Price */
#carousel-related-product .card .card-price {
    font-size: 1.1rem;
    font-weight: 700;
    color: #007bff; /* Highlighted in blue */
    margin-bottom: 0.5rem;
}

/* Button in Card */
#carousel-related-product .card .btn {
    background-color: #007bff;
    color: #fff;
    font-size: 0.9rem;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

/* Button Hover */
#carousel-related-product .card .btn:hover {
    background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 992px) {
    #carousel-related-product {
        gap: 1rem;
    }

    #carousel-related-product .card {
        width: 200px;
    }

    .row.text-left h4 {
        font-size: 1.5rem;
    }
}

@media (max-width: 768px) {
    #carousel-related-product {
        flex-direction: column;
        align-items: center;
    }

    #carousel-related-product .card {
        width: 100%;
        max-width: 300px;
        margin-bottom: 1rem;
    }

    .row.text-left h4 {
        text-align: center;
        font-size: 1.4rem;
    }
}

@media (max-width: 576px) {
    #carousel-related-product {
        padding: 0.5rem 0;
    }

    .row.text-left h4 {
        font-size: 1.2rem;
    }

    #carousel-related-product .card {
        max-width: 280px;
    }
}

</style>
