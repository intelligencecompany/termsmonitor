<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" expand-on-hover rail>
      <template v-slot:prepend>
        <v-list-item class="text-center">
          <v-list-item-avatar class="mx-auto">
            <v-img src="/assets/speedometer.svg" width="80" height="80"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5 font-weight-black text-secondary">Terms Monitor</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list>
        <v-list-item link href="/portal" prepend-icon="mdi-view-dashboard">
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/portal/providers" prepend-icon="mdi-account-multiple">
          <v-list-item-title>Providers</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/portal/data-ingestion" prepend-icon="mdi-database-import">
          <v-list-item-title>Data Ingestion</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/portal/processing-analysis" prepend-icon="mdi-chart-line">
          <v-list-item-title>Processing & Analysis</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/portal/notifications" prepend-icon="mdi-bell">
          <v-list-item-title>Notifications</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/portal/smart-dashboard" prepend-icon="mdi-lightbulb-on">
          <v-list-item-title>Smart Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/portal/chat" prepend-icon="mdi-chat">
          <v-list-item-title>Chat</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Terms Monitor Portal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon link href="/portal/account">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon link href="/portal/settings">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <NuxtPage />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import Footer from '~/components/default/Footer.vue';

const drawer = ref(false);
</script>

<style scoped>
</style>
