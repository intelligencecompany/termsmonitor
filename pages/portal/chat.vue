<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Chat</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="message in messages" :key="message.id">
                <v-list-item-content>
                  <v-list-item-title>{{ message.user }}</v-list-item-title>
                  <v-list-item-subtitle>{{ message.text }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-text-field label="Type a message" v-model="newMessage"></v-text-field>
            <v-btn @click="sendMessage">Send</v-btn>
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

const messages = ref([
  { id: 1, user: 'User 1', text: 'Hello!' },
  { id: 2, user: 'User 2', text: 'Hi there!' },
]);

const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({ id: Date.now(), user: 'You', text: newMessage.value });
    newMessage.value = '';
  }
};
</script>

<style scoped>
</style>
