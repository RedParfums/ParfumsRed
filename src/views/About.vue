<template>
  <Header />
  <Banner />
  <Service />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Banner from '@/components/AboutUsBanner.vue';
import Service from '@/components/service.vue';

export default {
  components: {
    Header,
    Banner,
    Service,
    Footer,
  }
};
</script>