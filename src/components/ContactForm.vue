<template>
  <div class="container py-5">
    <div class="row py-5">
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="form-group col-md-6 mb-3">
            <label for="inputname">Nom</label>
            <input type="text" class="form-control mt-1" name="name" placeholder="Nom" v-model="name" required />
          </div>
          <div class="form-group col-md-6 mb-3">
            <label for="inputemail">Email</label>
            <input type="email" class="form-control mt-1" name="email" placeholder="Email" v-model="email" required />
          </div>
        </div>
        <div class="mb-3">
          <label for="inputmessage">Message</label>
          <textarea class="form-control mt-1" name="message" placeholder="Message" rows="8" v-model="message" required></textarea>
        </div>
        <div class="row">
          <div class="col text-end mt-2">
            <button type="submit" class="btn btn-success btn-lg px-3 shadow-sm">Envoyer</button>
          </div>
        </div>
      </form>
      
      <!-- Notification messages -->
      <div v-if="statusMessage" :class="statusClass" class="mt-4">
        <p>{{ statusMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const WEB3FORMS_ACCESS_KEY = "102deee4-0356-4bff-9b4c-05e86bdbf820";
const name = ref("");
const email = ref("");
const message = ref("");

// For displaying status messages
const statusMessage = ref<string | null>(null);
const statusClass = ref("text-success"); // Class for success message

const submitForm = async () => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      statusMessage.value = "Votre message a été envoyé avec succès.";
      statusClass.value = "text-success";
    } else {
      statusMessage.value = "Une erreur est survenue. Veuillez réessayer.";
      statusClass.value = "text-danger";
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    statusMessage.value = "Une erreur est survenue. Veuillez réessayer.";
    statusClass.value = "text-danger";
  }
};
</script>
