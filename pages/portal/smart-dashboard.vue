<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Smart Dashboard</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="insight in insights" :key="insight.id">
                <v-list-item-content>
                  <v-list-item-title>{{ insight.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ insight.description }}</v-list-item-subtitle>
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
import { ref } from 'vue';

definePageMeta({
  layout: 'portal',
})

const insights = ref([
  { id: 1, title: 'Insight 1', description: 'Description of insight 1' },
  { id: 2, title: 'Insight 2', description: 'Description of insight 2' },
]);
</script>

<style scoped>
</style>
