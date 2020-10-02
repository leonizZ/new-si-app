<template>
  <div class="">
    <v-row>
      <v-col>
        <v-card class="mx-auto white--text" color="#2C343A" flat>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline white--text">
                Account Credits
              </div>
              <v-list-item-title class="headline mb-1 orange--text">
                P 123,123.00
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn depressed small color="success">
              Add Credits
            </v-btn>

            <v-btn depressed small color="warning">
              Withdraw
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="3" class="pr-0">
            <v-card
              class="pa-2 credits-tab"
              @click="setTab(0)"
              flat
              :class="{ active: tab === 0 }"
            >
              <div class="text-center">
                <v-avatar>
                  <img src="@/assets/gcash.png" alt="Gcash" />
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3" class="pr-0">
            <v-card
              class="pa-2 credits-tab"
              @click="setTab(1)"
              flat
              :class="{ active: tab === 1 }"
            >
              <div class="text-center">
                <v-avatar>
                  <img src="@/assets/cc.png" alt="Credit Card" />
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3" class="pr-0">
            <v-card
              class="pa-2 credits-tab"
              flat
              @click="setTab(2)"
              :class="{ active: tab === 2 }"
            >
              <div class="text-center">
                <v-avatar>
                  <img src="@/assets/ml.png" alt="Credit Card" />
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col cols="3" class="pr-0">
            <v-card
              class="pa-2 credits-tab"
              flat
              @click="setTab(3)"
              :class="{ active: tab === 3 }"
            >
              <div class="text-center">
                <v-avatar>
                  <img src="@/assets/cebuana.png" alt="Credit Card" />
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-tabs-items v-model="tab" class="mt-0 game-trend-cont">
          <!-- GCash -->
          <v-tab-item>
            <div>
              <v-row>
                <v-col class="pt-0">
                  <v-card color="blue darken-4">
                    <v-card-actions>
                      <v-btn color="#fff" text>
                        INSTRUCTIONS
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn icon @click="show = !show">
                        <v-icon>{{
                          show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                        }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                      <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text style="background-color:#fff">
                          <p>
                            Send 200.00 to 10,000.00 to any of the numbers below
                          </p>

                          <v-card
                            color="blue lighten-3"
                            class="pa-2 mb-2 d-flex"
                            flat
                          >
                            <div class="">
                              <p class="body-2 mb-0">DELAN</p>
                              <p class="caption mb-0">09664371287</p>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="">
                              <v-avatar>
                                <v-icon size="35">mdi-account-circle</v-icon>
                              </v-avatar>
                            </div>
                          </v-card>
                          <v-card
                            color="blue lighten-3"
                            class="pa-2 mb-2 d-flex"
                            flat
                          >
                            <div class="">
                              <p class="body-2 mb-0">DELAN</p>
                              <p class="caption mb-0">09664371287</p>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="">
                              <v-avatar>
                                <v-icon size="35">mdi-account-circle</v-icon>
                              </v-avatar>
                            </div>
                          </v-card>
                          <v-card
                            color="blue lighten-3"
                            class="pa-2 mb-2 d-flex"
                            flat
                          >
                            <div class="">
                              <p class="body-2 mb-0">DELAN</p>
                              <p class="caption mb-0">09664371287</p>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="">
                              <v-avatar>
                                <v-icon size="35">mdi-account-circle</v-icon>
                              </v-avatar>
                            </div>
                          </v-card>
                          <v-card
                            color="blue lighten-3"
                            class="pa-2 mb-2 d-flex"
                            flat
                          >
                            <div class="">
                              <p class="body-2 mb-0">DELAN</p>
                              <p class="caption mb-0">09664371287</p>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="">
                              <v-avatar>
                                <v-icon size="35">mdi-account-circle</v-icon>
                              </v-avatar>
                            </div>
                          </v-card>
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0">
                  <p class="white--text">DEPOSIT FORM</p>
                  <v-card color="#2C343A" class="pa-4">
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <p class="body-2 mb-1 white--text">Amount Number</p>
                      <v-text-field
                        v-model="username"
                        placeholder="0"
                        single-line
                        dense
                        solo
                      ></v-text-field>

                      <p class="body-2 mb-1 white--text">Sender</p>
                      <v-text-field
                        v-model="username"
                        placeholder="0"
                        single-line
                        dense
                        solo
                      ></v-text-field>
                      <p class="body-2 mb-1 white--text">Reciever</p>
                      <v-select
                        v-model="select"
                        :items="items"
                        label="Select Reciever"
                        data-vv-name="select"
                        required
                        solo
                        dense
                      ></v-select>
                      <p class="body-2 mb-1 white--text">Reference Number</p>
                      <v-text-field
                        v-model="username"
                        placeholder="0"
                        single-line
                        dense
                        solo
                      ></v-text-field>
                      <p class="body-2 mb-1 white--text">
                        Screenshot of GCash Reciept
                      </p>
                      <v-file-input
                        label="File input"
                        solo
                        dense
                      ></v-file-input>

                      <v-btn block color="error" class="mr-4" large>
                        SUBMIT
                      </v-btn>
                    </v-form>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-tab-item>
          <!-- Credit Card -->
          <v-tab-item>
            <v-card color="#2C343A" class="pa-4">
              <v-row>
                <v-col class="mx-auto">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <p class="body-2 mb-1 white--text">Amount</p>
                    <v-text-field
                      v-model="username"
                      placeholder="0"
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
            </v-card>
          </v-tab-item>
          <!-- ML -->
          <v-tab-item>
            <div>
              <v-row>
                <v-col class="pt-0">
                  <v-card color="red darken-4">
                    <v-card-actions>
                      <v-btn color="#fff" text>
                        INSTRUCTIONS
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn icon @click="show = !show">
                        <v-icon>{{
                          show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                        }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                      <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text style="background-color:#fff">
                          <p>
                            Send a minimum of 200.00 to any of the numbers below
                          </p>

                          <v-card
                            color="red lighten-3"
                            class="pa-2 mb-2 d-flex"
                            flat
                          >
                            <div class="">
                              <p class="body-2 mb-0">FRANCIL CHUA</p>
                              <p class="caption mb-0">09675215125</p>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="">
                              <v-avatar>
                                <v-icon size="35">mdi-account-circle</v-icon>
                              </v-avatar>
                            </div>
                          </v-card>
                          <p>
                            Fill the KPTN no, amount sender , receiver in the
                            form below.
                          </p>
                          <p>Attach the receipt in the attachment field.</p>
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0">
                  <p class="white--text">DEPOSIT FORM</p>
                  <v-card color="#2C343A" class="pa-4">
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <p class="body-2 mb-1 white--text">Amount</p>
                      <v-text-field
                        v-model="username"
                        placeholder="0"
                        single-line
                        dense
                        solo
                      ></v-text-field>

                      <p class="body-2 mb-1 white--text">Sender Name</p>
                      <v-text-field
                        v-model="username"
                        placeholder="0"
                        single-line
                        dense
                        solo
                      ></v-text-field>
                      <p class="body-2 mb-1 white--text">Reciever Name</p>
                      <v-select
                        v-model="select"
                        :items="items"
                        label="Select Reciever"
                        data-vv-name="select"
                        required
                        solo
                        dense
                      ></v-select>
                      <p class="body-2 mb-1 white--text">KPTN</p>
                      <v-text-field
                        v-model="username"
                        placeholder="0"
                        single-line
                        dense
                        solo
                      ></v-text-field>
                      <p class="body-2 mb-1 white--text">
                        Photo of actual reciept
                      </p>
                      <v-file-input
                        label="File input"
                        solo
                        dense
                      ></v-file-input>
                      <p class="body-2 mb-1 white--text">
                        Notes
                      </p>
                      <v-textarea
                        solo
                        name="input-7-4"
                        label="Notes"
                      ></v-textarea>

                      <v-btn block color="error" class="mr-4" large>
                        SUBMIT ML
                      </v-btn>
                    </v-form>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-tab-item>
          <!-- Cebuana -->
          <v-tab-item>
            <v-card color="#2C343A" class="pa-4">
              <v-row>
                <v-col class="mx-auto">
                  <p class="white--text">
                    Cebuana is currently unavailable
                  </p>
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
export default {
  data: () => ({
    tab: 0,
    show: true,
    select: null,
    valid: true,
    username: null,
    items: ['Delan', 'Rener', 'Joseph', 'Gilbert ']
  }),
  methods: {
    setTab(tab) {
      this.tab = tab
    }
  }
}
</script>

<style scoped>
.credits-tab {
  background-color: #2c343a;
}
.credits-tab.active {
  background-color: #fff;
}
</style>
