<template>
  <div>
      <v-row class="hero">
        <v-col cols="12">
          <h1 class="text-h2 font-weight-black text-secondary">Register</h1>
          <p class="my-4 text-h5 font-weight-medium">Create an account to start using Terms Monitor.</p>
        </v-col>
      </v-row>
      <v-row class="my-12">
        <v-col cols="12" md="6" class="mx-auto">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Register</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Name" required></v-text-field>
                <v-text-field label="Email" required></v-text-field>
                <v-text-field label="Password" type="password" required></v-text-field>
                <v-btn color="primary" type="submit">Register</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
  name: 'RegisterPage'
}
</script>

<style scoped>
</style>
