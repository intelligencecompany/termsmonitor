<template>
  <v-app>
    <v-app-bar app class="app-bar" elevate-on-scroll>
      <v-container class="max-width">
        <v-row align="center" justify="space-between">
            <v-toolbar-title>Terms Monitor</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text class="d-none d-md-flex" to="/product">Product</v-btn>
            <v-btn text class="d-none d-md-flex" to="/pricing">Pricing</v-btn>
            <v-btn text class="d-none d-md-flex" to="/contact">Contact</v-btn>
            <v-btn class="d-none d-md-flex bg-primary text-white" to="/signup" elevation="4">Get Started</v-btn>
            <v-btn icon class="d-flex d-md-none">
                <v-icon >mdi-menu</v-icon>
                <v-menu  offset-y activator="parent">
                    <v-list>
                        <v-list-item link to="/product">
                            <v-list-item-title>Product</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="/pricing">
                            <v-list-item-title>Pricing</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="/blog">
                            <v-list-item-title>Contact</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="/signup">
                            <v-list-item-title>Get Started</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="mt-12">
        <v-container class="max-width">
            <NuxtPage />
        </v-container>
    </v-main>

    <v-footer app>
      <v-col class="text-center">&copy; {{ new Date().getFullYear() }} Terms Monitor. All rights reserved.</v-col>
    </v-footer>
  </v-app>
</template>

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
    opacity: 0.1;
}
.hero {
    padding: 4rem 2rem;
    background: linear-gradient(to right, #e0eafc, #cfdef3);
    background-size: cover;
    position: relative;
    border-radius: 15px;
}
</style>
