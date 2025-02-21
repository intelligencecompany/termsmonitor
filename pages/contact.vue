<template>
  <div>
      <v-row class="hero">
        <v-col cols="12">
          <h1 class="text-h2 font-weight-black text-secondary">Contact Us</h1>
          <p class="my-4 text-h5 font-weight-medium">We'd love to hear from you. Get in touch with us!</p>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Contact Form</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="onSubmit">
                <v-text-field v-model="name" label="Name" :disabled="loading" required></v-text-field>
                <v-text-field v-model="email" label="Email" :disabled="loading" required></v-text-field>
                <v-textarea v-model="message" label="Message" :disabled="loading" required></v-textarea>
                <v-btn :loading="loading" :disabled="loading" color="primary" type="submit">Send Message</v-btn>
              </v-form>
              <v-alert v-if="success" type="success" class="mt-4">
                Thank you for contacting us! We will get back to you soon.
              </v-alert>
              <v-alert v-if="error" type="error" class="mt-4">
                Something went wrong. Please try again later.
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Contact Information</v-card-title>
            <v-card-text>
              <p>Email: info@trust-ai.nl</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      </div>
</template>

<script setup>
import { useReCaptcha } from 'vue-recaptcha-v3'

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const success = ref(false)
const error = ref(false)

const onSubmit = async () => {
  try {
    await recaptchaLoaded()
    const token = await executeRecaptcha('contact_form')
    console.log('ReCaptcha token:', token)

    loading.value = true
    success.value = false
    error.value = false
    const { data, error: fetchError } = await useFetch('/api/send-email', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: message.value,
        recaptchaToken: token
      }
    })
    loading.value = false
    if (fetchError.value) {
      console.error('Failed to send message:', fetchError.value)
      error.value = true
    } else {
      console.log('Message sent successfully:', data.value)
      success.value = true
      name.value = ''
      email.value = ''
      message.value = ''
    }
  } catch (e) {
    console.log('ReCaptcha error:', e)
    loading.value = false
    error.value = true
  }
}
</script>

<style scoped>

.fixed-height {
  height: 350px;
}
</style>
