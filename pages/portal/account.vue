<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Personal Details</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="First Name" v-model="firstName" :rules="[v => !!v || 'First name is required']"></v-text-field>
              <v-text-field label="Last Name" v-model="lastName" :rules="[v => !!v || 'Last name is required']"></v-text-field>
              <v-text-field label="Email" v-model="email" :rules="[v => !!v || 'Email is required', v => isValidEmail(v) || 'Email must be valid']"></v-text-field>
              <v-text-field label="Phone Number" v-model="phoneNumber" :rules="[v => !!v || 'Phone number is required']"></v-text-field>
              <v-select label="Gender" v-model="gender" :items="['Male', 'Female', 'Other']" :rules="[v => !!v || 'Gender is required']"></v-select>
              <v-text-field label="Street" v-model="street" :rules="[v => !!v || 'Street is required']"></v-text-field>
              <v-text-field label="Postal Code" v-model="postalCode" :rules="[v => !!v || 'Postal code is required']"></v-text-field>
              <v-text-field label="City" v-model="city" :rules="[v => !!v || 'City is required']"></v-text-field>
              <v-select label="Country" v-model="country" :items="countries" :rules="[v => !!v || 'Country is required']"></v-select>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Payment Details</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Bank Account IBAN" v-model="iban" :rules="[v => !!v || 'IBAN is required', v => isValidIBAN(v) || 'IBAN must be valid']"></v-text-field>
              <v-text-field label="Bank Account BIC" v-model="bic" :rules="[v => !!v || 'BIC is required', v => isValidBIC(v) || 'BIC must be valid']"></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Profile Picture</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-img :src="profilePicture" alt="Profile Picture" max-width="200" class="rounded-circle"></v-img>
              </v-col>
              <v-col cols="6">
                <v-file-input label="Change Profile Picture" v-model="profilePicture"></v-file-input>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="saveDetails">Save</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'portal',
})

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phoneNumber = ref('');
const gender = ref('');
const street = ref('');
const postalCode = ref('');
const city = ref('');
const country = ref('');
const countries = ref([]);
const iban = ref('');
const bic = ref('');
const profilePicture = ref(null);

const fetchCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    countries.value = data.map(country => country.name.common).sort();
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

onMounted(() => {
  fetchCountries();
});

const isValidIBAN = (iban) => {
  const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/;
  return ibanRegex.test(iban);
};

const isValidBIC = (bic) => {
  const bicRegex = /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/;
  return bicRegex.test(bic);
};

const isValidEmail = (email) => {
  const emailRegex = /.+@.+\..+/;
  return emailRegex.test(email);
};

const saveDetails = () => {
  const userDetails = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    gender: gender.value,
    address: {
      street: street.value,
      postalCode: postalCode.value,
      city: city.value,
      country: country.value,
    },
    paymentDetails: {
      iban: iban.value,
      bic: bic.value,
    },
    profilePicture: profilePicture.value,
  };
  console.log(JSON.stringify(userDetails));
};
</script>

<style scoped>
.rounded-circle {
  border-radius: 50%;
}
</style>

