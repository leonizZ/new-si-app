<template>
  <div class="">
    <credit-balance></credit-balance>

    <v-row>
      <v-col cols="6" class="">
        <v-card
          class="pa-2 account-tab"
          @click="setTab(0)"
          flat
          :class="{ active: tab === 0 }"
        >
          <div class="text-center">
            <p class="body-2 mb-0">Transactions</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" class="">
        <v-card
          class="pa-2 account-tab"
          @click="setTab(1)"
          flat
          :class="{ active: tab === 1 }"
        >
          <div class="text-center">
            <p class="body-2 mb-0">Account History</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0">
        <v-tabs-items v-model="tab" class="game-trend-cont">
          <v-tab-item>
            <div class="">
              <v-row>
                <v-col cols="12" sm="6" md="4" class="pb-0 pt-0">
                  <v-card
                    flat
                    class="transaction-history-cont px-3 py-2 white--text"
                  >
                    <div class="d-flex justify-space-between align-center">
                      <div class="">
                        <span class="caption grey--text">#123</span>
                        <p class="body-2 mb-0">Withdraw</p>
                      </div>
                      <div class="flex-column right  ">
                        <p class="mb-0 trans-amount withdraw">- 3,445.00</p>
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
                        <span class="caption grey--text">#123</span>
                        <p class="body-2 mb-0">Add Credits</p>
                      </div>
                      <div class="flex-column right  ">
                        <p class="mb-0 trans-amount add-credits">+ 3,445.00</p>
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
                        <span class="caption grey--text">#123</span>
                        <p class="body-2 mb-0">Add Credits</p>
                      </div>
                      <div class="flex-column right  ">
                        <p class="mb-0 trans-amount add-credits">+ 1,445.00</p>
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
                        <span class="caption grey--text">#123</span>
                        <p class="body-2 mb-0">Add Credits</p>
                      </div>
                      <div class="flex-column right  ">
                        <p class="mb-0 trans-amount add-credits">+ 2,500.00</p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-tab-item>

          <v-tab-item>
            <v-card color="#2C343A" class="px-4">
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

<style scoped>
.account-tab {
  background-color: #2c3439;
  color: #fff;
}

.account-tab.active {
  background-color: #fff;
  color: #000;
}
</style>
