<template>
    <v-app-bar app class="app-bar" elevate-on-scroll>
        
      <v-container class="max-width">
        <v-row align="center">
            <v-img src="/assets/speedometer.svg" max-height="40" max-width="40" contain></v-img>
            <router-link to="/" class="d-flex align-center no-underline">
              <v-toolbar-title class="ml-2">Terms Monitor</v-toolbar-title>
            </router-link>
            <v-spacer />
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
                        <v-list-item link to="/contact">
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
</template>

<style scoped>
.ml-2 {
  margin-left: 8px;
}

.no-underline {
  text-decoration: none;
  color: inherit;
  overflow: visible;
}
</style>