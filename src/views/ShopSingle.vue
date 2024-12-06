<template>
  <div>
    <Header />
    <ProductContent :product="product" />
    <StartArticle />
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import products from '@/data/products.json';
import ProductContent from '@/components/productContent.vue';
import StartArticle from '@/components/StartArticle.vue';

export default {
  name: 'ShopSingle',
  components: {
    Header,
    ProductContent,
    StartArticle,
    Footer,
  },
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.loadProduct();
  },
  watch: {
    // Watch the route and reload product data on change
    '$route.params.id': 'loadProduct',
  },
  methods: {
    loadProduct() {
      const productId = parseInt(this.$route.params.id);
      this.product = products.find(product => product.id === productId) || {};
    },
  },
};
</script>
