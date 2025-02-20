<template>
  <div>
      <v-row class="hero">
        <v-col cols="12">
          <h1 class="text-h2 font-weight-black text-secondary">Contact Us</h1>
          <p class="my-4 text-h5 font-weight-medium">We'd love to hear from you. Get in touch with us!</p>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Contact Form</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Name" required></v-text-field>
                <v-text-field label="Email" required></v-text-field>
                <v-textarea label="Message" required></v-textarea>
                <v-btn color="primary" type="submit">Send Message</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Contact Information</v-card-title>
            <v-card-text>
              <p>Email: support@termsmonitor.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: 1234 Main St, Anytown, USA</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>

.fixed-height {
  height: 350px;
}
</style>
