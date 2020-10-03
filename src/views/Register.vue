<template>
  <v-container class="login-cont">
    <v-row>
      <div class="v-col mx-auto">
        <img src="../assets/si-logo-brd.png" alt="" />
      </div>
    </v-row>
    <v-row>
      <v-col class="mx-auto">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            required
            single-line
            dense
            solo
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            single-line
            solo
            dense
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn block color="warning" large>
            REGISTER
          </v-btn>
          <br />
          <v-btn block color="error" class="mr-4" large>
            LOGIN
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    valid: true,
    phone: '',
    password: 'Password',
    phoneRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Phone must be valid'
    ],
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters'
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
    }
  }
}
</script>

<style scoped>
.login-cont {
  background-color: #1d2329;
  height: 100vh;
}
</style>
