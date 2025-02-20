<template>
  <div>
    <v-row class="hero">
      <v-col cols="12">
        <h1 class="text-h2 font-weight-black text-secondary">Login</h1>
        <p class="my-4 text-h5 font-weight-medium">Log in to your account to continue using Terms Monitor.</p>
      </v-col>
    </v-row>
    <v-row class="my-12">
      <v-col cols="12" md="6" class="mx-auto">
        <v-card class="pa-4" elevation="4">
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="email" label="Email" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
              <v-btn color="primary" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '#app'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const { data, error } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (error.value) {
      throw new Error(error.value)
    }
    router.push('/dashboard')
  } catch (error) {
    console.error('An error occurred:', error)
  }
}
</script>

<style scoped>
</style>
