<template>
  <Header />
  <ContactBanner />
  <ContactForm />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ContactBanner from '@/components/ContactBanner.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  components: {
    Header,
    ContactBanner,
    ContactForm,
    Footer
  }
};
</script>