<template>
  <div>
      <v-row class="hero">
        <v-col cols="12">
          <h1 class="text-h2 font-weight-black text-secondary">Pricing Plans</h1>
          <p class="my-4 text-h5 font-weight-medium">Choose the plan that best suits your needs.</p>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="12" md="4" class="pricing-card">
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large" color="secondary" class="mb-4">
                <v-icon large>mdi-currency-usd</v-icon>
              </v-btn>
              Basic Plan
            </v-card-title>
            <v-card-text class="mt-4">
              <p>€ 10/month</p>
              <ul>
                <li>Automated Crawling & Detection</li>
                <li>Version Tracking</li>
                <li>User-Friendly Dashboard</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="pricing-card">
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large" color="secondary" class="mb-4">
                <v-icon large>mdi-currency-usd</v-icon>
              </v-btn>
              Pro Plan
            </v-card-title>
            <v-card-text class="mt-4">
              <p>€ 30/month</p>
              <ul>
                <li>All features in Basic Plan</li>
                <li>Legal Risk Evaluation</li>
                <li>Customizable Alerts</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="pricing-card">
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large" color="secondary" class="mb-4">
                <v-icon large>mdi-currency-usd</v-icon>
              </v-btn>
              Enterprise Plan
            </v-card-title>
            <v-card-text class="mt-4">
              <p>Contact Sales</p>
              <ul>
                <li>All features in Pro Plan</li>
                <li>Priority Support</li>
                <li>Custom Integrations</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
  name: 'PricingPage'
}
</script>

<style scoped>

.fixed-height {
  height: 350px;
}

.pricing-card {
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
