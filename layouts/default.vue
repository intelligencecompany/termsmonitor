<template>
  <v-app>
    <Header />

    <v-main class="mt-12">
        <v-container class="max-width">
            <NuxtPage />
        </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/default/Header.vue'
import Footer from '~/components/default/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
.max-width {
  max-width: 1280px;
  margin: 0 auto;
}

.hero:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/assets/brain2.svg') no-repeat center center;
    border-radius: 15px;
    opacity: 0.05;
}
.hero {
    padding: 4rem 2rem;
    background: linear-gradient(to right, #e0eafc, #cfdef3);
    background-size: cover;
    position: relative;
    border-radius: 15px;
}
</style>
