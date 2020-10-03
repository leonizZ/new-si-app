<template>
  <div class="">
    <credit-balance></credit-balance>
    <v-row>
      <v-col>
        <v-tabs
          v-model="tab"
          background-color="blue-grey darken-3"
          fixed-tabs
          dark
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab @click="setTab(0)">
            TRANSACTIONS
          </v-tab>
          <v-tab @click="setTab(1)">
            ACCOUNT SETTINGS
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="mt-2 game-trend-cont">
          <v-tab-item>
            <div class="">
              <v-row>
                <v-col cols="12" sm="6" md="4" class="pb-0">
                  <v-card
                    flat
                    class="transaction-history-cont px-3 py-2 white--text"
                  >
                    <div class="d-flex justify-space-between align-center">
                      <div class="">
                        <span class="caption">#123</span>
                        <p class="mb-0">Withdraw</p>
                      </div>
                      <div class="flex-column right  ">
                        <p class="mb-0 bet-amount">3,445.00</p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="py-0">
                  <v-card
                    flat
                    class="transaction-history-cont px-3 py-2 white--text"
                  >
                    <div class="d-flex justify-space-between align-center">
                      <div class="">
                        <span class="caption">#123</span>
                        <p class="mb-0">Add Credits</p>
                      </div>
                      <div class="flex-column right  ">
                        <p class="mb-0 bet-amount">3,445.00</p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="py-0">
                  <v-card
                    flat
                    class="transaction-history-cont px-3 py-2 white--text"
                  >
                    <div class="d-flex justify-space-between align-center">
                      <div class="">
                        <span class="caption">#123</span>
                        <p class="mb-0">Add Credits</p>
                      </div>
                      <div class="flex-column right  ">
                        <p class="mb-0 bet-amount">3,445.00</p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="py-0">
                  <v-card
                    flat
                    class="transaction-history-cont px-3 py-2 white--text"
                  >
                    <div class="d-flex justify-space-between align-center">
                      <div class="">
                        <span class="caption">#123</span>
                        <p class="mb-0">Add Credits</p>
                      </div>
                      <div class="flex-column right  ">
                        <p class="mb-0 bet-amount">3,445.00</p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-tab-item>

          <v-tab-item>
            <v-card color="#2C343A" class="pa-4">
              <v-row>
                <v-col class="mx-auto">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <p class="body-2 mb-1 white--text">Name</p>
                    <v-text-field
                      v-model="username"
                      placeholder="Sabong Master"
                      single-line
                      solo
                      dense
                    ></v-text-field>
                    <v-btn block color="warning" class="mr-4" large>
                      UPDATE USERNAME
                    </v-btn>
                  </v-form>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <p class="body-2 mb-1 white--text">Current Password</p>
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
                    <p class="body-2 mb-1 white--text">New Password</p>
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      single-line
                      dense
                      solo
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    <p class="body-2 mb-1 white--text">Repeat New Password</p>
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
                    <v-btn block color="warning" class="mr-4" large>
                      UPDATE PASSWORD
                    </v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CreditBalance from '@/components/CreditBalance'
export default {
  components: {
    CreditBalance
  },
  data: () => ({
    tab: 0,
    show1: false,
    valid: true,
    username: null,
    password: 'Password',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters'
    }
  }),
  methods: {
    setTab(tab) {
      this.tab = tab
    }
  }
}
</script>

<style></style>
