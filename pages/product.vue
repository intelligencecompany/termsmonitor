<template>
      <v-row class="hero">
        <v-col cols="12">
          <h1 class="text-h2 font-weight-black text-secondary">Our Product</h1>
          <p class="my-4 text-h5 font-weight-medium">Discover the features and benefits of our Terms Monitor product.</p>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="12" md="4" class="feature-card">
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large" color="secondary" class="mb-4">
                <v-icon large>mdi-magnify</v-icon>
              </v-btn>
              Automated Crawling & Detection
            </v-card-title>
            <v-card-text class="mt-4">The tool can periodically crawl the websites of SaaS providers to detect if there’s been an update to the terms, privacy policies, or user agreements.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="feature-card">
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large" color="secondary" class="mb-4">
                <v-icon large>mdi-chart-bar</v-icon>
              </v-btn>
              Version Tracking and Change Detection
            </v-card-title>
            <v-card-text class="mt-4">The tool would track all versions of T&Cs, comparing the old and new versions and highlighting any changes. This could include text changes, additions, or deletions.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="feature-card">
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large" color="secondary" class="mb-4">
                <v-icon large>mdi-view-dashboard</v-icon>
              </v-btn>
              User-Friendly Dashboard
            </v-card-title>
            <v-card-text class="mt-4">A dashboard to display notifications, changes, and updates at a glance. A SaaS business could quickly see which of their services has updated its terms, the frequency of updates, and the impact of these changes.</v-card-text>
          </v-card>
        </v-col>
      </v-row>
</template>

<script>
export default {
  name: 'ProductPage'
}
</script>

<style scoped>

.fixed-height {
  height: 350px;
}

.feature-card {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.icon-btn {
  background-color: #007bff;
  color: #fff;
  margin-bottom: 1rem;
}
</style>
