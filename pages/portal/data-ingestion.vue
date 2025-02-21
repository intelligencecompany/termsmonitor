<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedProvider"
          :items="providers"
          label="Select Provider"
          class="mb-4"
          @change="fetchProviderData"
        ></v-select>
        <v-card>
          <v-card-title>Data Ingestion</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Terms of Use URL" v-model="urls.termsOfUse" :rules="[urlRule]" prepend-icon="mdi-link" clearable append-inner-icon="mdi-eye" @click:append-inner="openModal(urls.termsOfUse)" required></v-text-field>
              <v-text-field label="Privacy Policy URL" v-model="urls.privacyPolicy" :rules="[urlRule]" prepend-icon="mdi-link" clearable append-inner-icon="mdi-eye" @click:append-inner="openModal(urls.privacyPolicy)" required></v-text-field>
              <v-text-field label="Cookie Policy URL" v-model="urls.cookiePolicy" :rules="[urlRule]" prepend-icon="mdi-link" clearable append-inner-icon="mdi-eye" @click:append-inner="openModal(urls.cookiePolicy)" required></v-text-field>
              <div v-for="(url, index) in additionalUrls" :key="index" class="d-flex align-center">
                <v-text-field :label="'Additional URL ' + (index + 1)" @input="updateUrl(index, $event)" :rules="[urlRule]" prepend-icon="mdi-link" clearable class="flex-grow-1" append-inner-icon="mdi-eye" @click:append-inner="openModal(url)" append-icon="mdi-delete" @click:append="removeUrlField(index)"></v-text-field>
              </div>
              <v-btn @click="addUrlField">+ Add URL</v-btn>
              <v-divider class="my-6"></v-divider>
              <div v-for="(file, index) in documents" :key="index" class="d-flex align-center">
                <v-file-input label="Upload Document" v-model="documents[index]" show-size :rules="[fileRule]" append-inner-icon="mdi-download" @click:append-inner="downloadFile(index)" append-icon="mdi-delete" @click:append="removeDocumentField(index)"></v-file-input>
              </div>
              <v-btn @click="addDocumentField">+ Add Document</v-btn>
              <v-divider class="my-6"></v-divider>
              <v-btn color="primary" class="mt-4" @click="ingestData">
                <v-icon left>mdi-content-save</v-icon>
                Save
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="isModalOpen" max-width="800px">
      <v-card>
        <v-card-title>URL Preview</v-card-title>
        <v-card-text>
          <iframe :src="modalUrl" width="100%" height="400px"></iframe>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="isModalOpen = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'portal',
})

const selectedProvider = ref(null);
const providers = ref(['Provider 1', 'Provider 2', 'Provider 3']);

const urls = ref({
  termsOfUse: '',
  privacyPolicy: '',
  cookiePolicy: ''
});
const additionalUrls = ref([]);
const documents = ref([]);
const isModalOpen = ref(false);
const modalUrl = ref('');

const urlRule = (value) => {
  const pattern = /^(https?|ftp|sftp|http):\/\/[^\s/$.?#].[^\s]*$/i;
  return pattern.test(value) || 'Invalid URL';
};

const fileRule = (value) => {
  if (!value) return true;
  const allowedExtensions = ['pdf', 'txt', 'doc', 'docx'];
  const fileExtension = value.name.split('.').pop().toLowerCase();
  return allowedExtensions.includes(fileExtension) || 'Invalid file type. Only PDF, TXT, and Word files are allowed.';
};

const addUrlField = () => {
  additionalUrls.value.push('');
};

const removeUrlField = (index) => {
  additionalUrls.value.splice(index, 1);
};

const removeDocumentField = (index) => {
    documents.value.splice(index, 1);
};

const updateUrl = (index, event) => {
  additionalUrls.value[index] = event.target.value;
};

const openModal = (url) => {
  modalUrl.value = url;
  isModalOpen.value = true;
};

const downloadFile = (index) => {
  const file = documents.value[index];
  if (file) {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  }
};

const addDocumentField = () => {
  documents.value.push(null);
};

const ingestData = () => {
  // Logic to ingest data
};

const fetchProviderData = () => {
  // Fetch URLs and document names specific to the selected provider
  // Example:
  urls.value.termsOfUse = 'https://example.com/terms-of-use';
  urls.value.privacyPolicy = 'https://example.com/privacy-policy';
  urls.value.cookiePolicy = 'https://example.com/cookie-policy';
  documents.value = [new File([''], 'example.pdf')];
};
</script>

<style scoped>
</style>
