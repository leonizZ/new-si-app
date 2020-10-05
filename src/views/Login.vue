<template>
  <div class="login-cont mt-4 px-4">
    <div class="si-background ">
      <img src="@/assets/si-bg.png" alt="" />
    </div>
    <div class="test">
      <v-row>
        <div class="v-col mx-auto">
          <img width="150px" src="../assets/si-logo-brd.png" alt="" />
        </div>
      </v-row>
      <v-row>
        <v-col class="mx-auto">
          <v-form ref="form" v-model="valid" lazy-validation>
            <p class="body-2 mb-1 white--text">Phone</p>
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              class="mb-2"
              required
              single-line
              dense
              hide-details="auto"
              solo
            ></v-text-field>
            <p class="body-2 mb-1 white--text">Password</p>
            <v-text-field
              v-model="password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="showPass ? 'text' : 'password'"
              name="input-10-1"
              single-line
              dense
              solo
              @click:append="showPass = !showPass"
            ></v-text-field>
            <v-btn block color="warning" class="mt-4" @click="goTo('/')">
              LOGIN
            </v-btn>
            <br />
            <div class="text-center">
              <v-btn dark @click="goTo('/register')" text>
                REGISTER
              </v-btn>
              <br />
              <v-btn dark @click="goTo('/register')" text>
                FORGOT PASSWORD
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showPass: false,
    valid: true,
    phone: '',
    password: 'Password',
    phoneRules: [
      v => !!v || 'Phone is required',
      v => (v && v.length <= 11) || 'Phone must be valid'
    ],
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 6 || 'Min 8 characters'
    }
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },

    goTo(path) {
      this.$router.push({ path: path }).catch(() => {
        this.drawer = false
      })
    }
  }
}
</script>

<style scoped></style>
