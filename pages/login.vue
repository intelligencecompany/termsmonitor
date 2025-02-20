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
            <v-form @submit.prevent="handleLogin">
              <v-text-field v-model="credentials.username" label="Username" required></v-text-field>
              <v-text-field v-model="credentials.password" label="Password" type="password" required></v-text-field>
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
import { useAuth } from '~/composables/useAuth'

const credentials = ref({ username: '', password: '' })
const { login } = useAuth()

const handleLogin = async () => {
  await login(credentials.value)
  navigateTo('/')
}
</script>

<style scoped>
</style>
