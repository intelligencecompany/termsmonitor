<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Providers
            <v-spacer></v-spacer>
            <v-btn @click="addProvider" color="primary">
              <v-icon left>mdi-plus</v-icon>
              Add Provider
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="providers" class="elevation-1">
              <template v-slot:item.name="{ item }">
                <v-text-field v-model="item.name" hide-details></v-text-field>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-row justify="end" class="gap-2">
                  <v-btn icon @click="editProvider(item)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon @click="removeProvider(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn icon @click="analyzeProvider(item)">
                    <v-icon>mdi-chart-bar</v-icon>
                  </v-btn>
                  <v-btn icon @click="chatProvider(item)">
                    <v-icon>mdi-chat</v-icon>
                  </v-btn>
                </v-row>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'portal',
})

const router = useRouter();

const headers = [
  { text: 'Provider Name', value: 'name', sortable: false },
  { text: 'Actions', value: 'actions', sortable: false },
];

const providers = ref([
  { id: 1, name: 'Provider 1' },
  { id: 2, name: 'Provider 2' },
]);

const addProvider = () => {
  providers.value.push({ id: Date.now(), name: '' });
};

const editProvider = (provider) => {
  router.push({ path: '/portal/data-ingestion', query: { providerId: provider.id } });
};

const removeProvider = (id) => {
  providers.value = providers.value.filter(provider => provider.id !== id);
};

const analyzeProvider = (provider) => {
  // Logic to analyze provider
};

const chatProvider = (provider) => {
  // Logic to chat with provider
};
</script>

<style scoped>
</style>
