<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Search Results</v-card-title>
          <v-card-text>
            <v-text-field v-model="searchQuery" label="Search" @keyup.enter="performSearch"></v-text-field>
            <v-btn @click="performSearch" color="primary">Search</v-btn>
            <v-divider class="my-4"></v-divider>
            <v-list>
              <v-list-item v-for="result in searchResults" :key="result.id">
                <v-list-item-content>
                  <v-list-item-title>{{ result.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ result.description }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const searchQuery = ref('');
const searchResults = ref([]);

onMounted(() => {
  searchQuery.value = route.query.q || '';
  performSearch();
});

const performSearch = () => {
  // Logic to perform search and update searchResults
  searchResults.value = [
    { id: 1, title: 'Result 1', description: 'Description for result 1' },
    { id: 2, title: 'Result 2', description: 'Description for result 2' },
    // Add more mock results or fetch from an API
  ];
};
</script>

<style scoped>
</style>
