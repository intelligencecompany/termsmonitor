<template>
  <div>
      <v-row class="hero">
        <v-col cols="12">
          <h1 class="text-h2 font-weight-black text-secondary">Sign Up</h1>
          <p class="my-4 text-h5 font-weight-medium">Create an account to start monitoring terms and conditions effortlessly.</p>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="12" md="6" class="mx-auto">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Sign Up</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Name" required></v-text-field>
                <v-text-field label="Email" required></v-text-field>
                <v-text-field label="Password" type="password" required></v-text-field>
                <v-btn color="primary" type="submit">Sign Up</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
  name: 'SignupPage'
}
</script>

<style scoped>
</style>
