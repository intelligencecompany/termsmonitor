<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to the secure dashboard!</p>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAxios } from '@nuxtjs/axios'

const data = ref(null)
const axios = useAxios()

onMounted(async () => {
  try {
    const response = await axios.get('/some-endpoint')
    data.value = response.data
  } catch (error) {
    console.error('An error occurred:', error)
  }
})
</script>

<script>
export default {
  middleware: 'auth'
}
</script>