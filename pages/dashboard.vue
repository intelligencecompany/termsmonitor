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

const data = ref(null)

onMounted(async () => {
  try {
    const { data: responseData } = await useFetch('/some-endpoint')
    data.value = responseData.value
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