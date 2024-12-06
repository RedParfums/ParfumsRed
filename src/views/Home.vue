<template>
  <Header />
  <MainBanner />
  <MonthCategories />
  <FeaturedProduct />
  
  <Reduction v-if="sold.sale"/>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import FeaturedProduct from '@/components/FeaturedProduct.vue';
import MainBanner from '@/components/MainBanner.vue';
import MonthCategories from '@/components/MonthCategories.vue';
import Reduction from '@/components/Reduction.vue';
import sold from '@/data/solde.json'

export default {
  name: 'Home',
  components: {
    Header,
    MainBanner,
    MonthCategories,
    FeaturedProduct,
    Reduction,
    Footer
  },
  data() {
    return {
      sold
    }
  }
};
</script>

