<template>
  <v-container>
    <v-layout row style="margin-top:200px">
    </v-layout>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs-1 offset-sm-6>
      </v-flex>
      <v-flex xs-1 offset-sm-6>
        <h1>Sign up</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-5>
      <v-flex xs-2>
      </v-flex>
      <v-flex xs-8>
        <v-form @submit.prevent="onSignup">
          <v-layout row>
            <v-flex xs-12 sm-8>
              <v-text-field
              name="email"
              label="Email"
              id="email"
              v-model="email"
              type="email"
              required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row mt-3>
            <v-flex xs-12 sm-8>
              <v-text-field
              name="password"
              label="Password (least 6 characters)"
              id="password"
              v-model="password"
              type="password"
              required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row mt-3>
            <v-flex xs-12 sm-8>
              <v-text-field
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              :rules="[comparepasswords]"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row warp mt-5>
            <v-flex>
            </v-flex>
            <v-flex xs-4>
              <v-btn type="submit" class="primary" :loading="loading" :disabled="loading" @click="loader = 'loading'">
                <h4>Sign Up</h4>
                <template v-slot:loader>
                  <span><h4>Loading..</h4></span>
                </template>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
      <v-flex xs-2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparepasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
    // send state of user ma
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignup () {
      // Vuex
      // console.log({ email: this.email, password: this.password, confirmPassword: this.confirmPassword })
      this.$store.dispatch('signupUser', { email: this.email, password: this.password })
    },
    onDismissed () {
      // console.log('Dismissed Alert!')
      this.$store.dispatch('clearError')
    }
  }
}
</script>
