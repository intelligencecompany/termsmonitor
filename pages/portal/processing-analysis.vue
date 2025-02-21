<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Processing & Analysis</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="analysis in analyses" :key="analysis.id">
                <v-list-item-content>
                  <v-list-item-title>{{ analysis.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ analysis.summary }}</v-list-item-subtitle>
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

const analyses = ref([
  { id: 1, title: 'Analysis 1', summary: 'Summary of analysis 1' },
  { id: 2, title: 'Analysis 2', summary: 'Summary of analysis 2' },
]);
</script>

<style scoped>
</style>
