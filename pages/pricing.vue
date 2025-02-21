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
              <v-icon large>mdi-currency-eur</v-icon>
            </v-btn>
            Free Plan
          </v-card-title>
          <v-card-text class="mt-4 flex-grow-1">
            <p class="text-h4 font-weight-bold text-secondary">{{ formatPrice(0) }} <sup>month</sup></p>
            <v-list shaped class="mt-2">
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-account"></v-icon>
                </template>
                <v-list-item-title>1 Provider</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-plus"></v-icon>
                </template>
                <v-list-item-title>Additional Providers: € {{formatPrice(3.99)}}/month each</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-magnify"></v-icon>
                </template>
                <v-list-item-title>Automated Crawling & Detection</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-history"></v-icon>
                </template>
                <v-list-item-title>Version Tracking</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-view-dashboard"></v-icon>
                </template>
                <v-list-item-title>User-Friendly Dashboard</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" rounded size="large" block to="/signup">Try For Free</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="pricing-card">
        <v-card class="pa-4 fixed-height" elevation="4">
          <v-card-title class="d-flex flex-column align-items-center">
            <v-btn icon size="large" color="secondary" class="mb-4">
              <v-icon large>mdi-currency-eur</v-icon>
            </v-btn>
            Pro Plan
          </v-card-title>
          <v-card-text class="mt-4 flex-grow-1">
            <p class="text-h4 font-weight-bold text-secondary">{{ formatPrice(53.99) }} <sup>month</sup></p>
            <v-list shaped class="mt-2">
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-account-multiple"></v-icon>
                </template>
                <v-list-item-title>15 Providers</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-plus"></v-icon>
                </template>
                <v-list-item-title>Additional Providers: € {{formatPrice(3.49)}}/month each</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-check"></v-icon>
                </template>
                <v-list-item-title>All features in Free Plan</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-alert"></v-icon>
                </template>
                <v-list-item-title>Legal Risk Evaluation</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-bell"></v-icon>
                </template>
                <v-list-item-title>Customizable Alerts</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-chat"></v-icon>
                </template>
                <v-list-item-title>AI Chat Feature</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" rounded size="large" block to="/signup">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="pricing-card">
        <v-card class="pa-4 fixed-height" elevation="4">
          <v-card-title class="d-flex flex-column align-items-center">
            <v-btn icon size="large" color="secondary" class="mb-4">
              <v-icon large>mdi-currency-eur</v-icon>
            </v-btn>
            Enterprise Plan
          </v-card-title>
          <v-card-text class="mt-4 flex-grow-1">
            <v-btn color="primary" rounded size="large"  to="/contact" block>Contact Sales</v-btn>
            <v-list shaped class="mt-2">
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-check"></v-icon>
                </template>
                <v-list-item-title>All features in Pro Plan</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-star"></v-icon>
                </template>
                <v-list-item-title>Priority Support</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-api"></v-icon>
                </template>
                <v-list-item-title>API Integration</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-cogs"></v-icon>
                </template>
                <v-list-item-title>Custom Integrations</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" rounded size="large" block to="/signup">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-end mt-4">
        <v-switch v-model="includeVAT" label="Include 21% VAT" color="primary"></v-switch>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const includeVAT = ref(false)

const formatPrice = (price) => {
  const finalPrice = includeVAT.value ? price * 1.21 : price
  return `€ ${finalPrice.toFixed(2)}`
}
</script>

<style scoped>
.fixed-height {
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.text-center {
  text-align: center;
}
</style>
