<template>
  <footer class="bg-dark text-light" id="template_footer">
    <div class="container py-5">
      <div class="row">
        <!-- Contact Info -->
        <div class="col-md-4 mb-4">
          <h2 class="h2 text-success border-bottom pb-3 border-light logo">Red Parfums</h2>
          <ul class="list-unstyled footer-link-list">
            <li class="mb-2">
              <i class="fas fa-map-marker-alt me-2"></i>
              {{ contactInfo.adresse }}
            </li>
            <li class="mb-2">
              <i class="fas fa-phone me-2"></i>
              <a class="text-decoration-none text-light" :href="'tel:' + contactInfo.numero">
                {{ contactInfo.numero }}
              </a>
            </li>
            <li>
              <i class="fas fa-envelope me-2"></i>
              <a class="text-decoration-none text-light" :href="'mailto:' + contactInfo.email">
                {{ contactInfo.email }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Media Icons -->
        <div class="col-md-4 mb-4">
          <h2 class="h2 text-success border-bottom pb-3 border-light">Follow Us</h2>
          <ul class="list-inline mt-3 footer-icons">
            <li v-for="(link, platform) in socialMediaLinks" :key="platform" class="list-inline-item">
              <a class="text-light text-decoration-none border border-light rounded-circle p-2" target="_blank"
                :href="link">
                <i :class="'fab fa-' + platform"></i>
              </a>
            </li>
          </ul>
        </div>

        <!-- About Section -->
        <div class="col-md-4 mb-4">
          <h2 class="h2 text-success border-bottom pb-3 border-light">About Red Parfums</h2>
          <p>{{ about }}</p>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <div class="border-top border-light pt-3"></div>
          <p class="text-center">
            Copyright &copy; 2024 <strong>Red Parfums</strong> | Developed by
            <a href="https://belkadi-hamza.vercel.app/" class="text-success text-decoration-none" target="_blank">
              BELKADI HAMZA
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import contactData from "@/data//contact.json";

export default {
  name: "Footer",
  data() {
    return {
      contactInfo: {
        adresse: "",
        numero: "",
        email: "",
      },
      socialMediaLinks: {
        facebook: "",
        instagram: "",
        tiktok: "",
      },
      about: "",
    };
  },
  created() {
    this.contactInfo = {
      adresse: contactData.adresse,
      numero: contactData.numero,
      email: contactData.email,
    };
    this.socialMediaLinks = {
      facebook: contactData.facebook,
      instagram: contactData.instagram,
      tiktok: contactData.tiktok,
    };
    this.about = contactData["about us"];
  },
};
</script>