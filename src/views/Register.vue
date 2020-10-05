<template>
  <v-container class="register-cont mt-4 px-4">
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
              placeholder="0900000000"
              dense
              solo
              hide-details="auto"
            >
            </v-text-field>
            <p class="body-2 mb-1 white--text">UserName</p>
            <v-text-field
              v-model="username"
              placeholder="Username"
              class="mb-2"
              single-line
              solo
              hide-details="auto"
              dense
            ></v-text-field>
            <p class="body-2 mb-1 white--text">Password</p>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              class="mb-2"
              single-line
              solo
              dense
              @click:append="show1 = !show1"
              hide-details="auto"
            ></v-text-field>
            <p class="body-2 mb-1 white--text">Confirm Password</p>
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
            <v-btn block color="warning">
              REGISTER
            </v-btn>
            <br />
            <div class="text-center">
              <v-btn text dark @click="goTo('/login')">
                LOGIN
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    valid: true,
    phone: '',
    username: '',
    password: 'Password',
    phoneRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 11) || 'Phone must be valid'
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
    },
    goTo(path) {
      this.$router.push({ path: path }).catch(() => {
        this.drawer = false
      })
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
