<template>
  <div class="">
    <!-- Video Content -->
    <v-row>
      <v-col class="vid-content">
        <div class="d-flex justify-space-between align-center">
          <div class="">
            <p>Fight #123</p>
          </div>
          <div class="">
            <p class="caption mb-0">
              <v-icon color="red" size="12">mdi-checkbox-blank-circle</v-icon>
              Not Open
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- Bet Container -->
    <v-row>
      <v-col cols="6" class="main-bet-container meron-cont ">
        <div class="bet-head">
          MERON
        </div>

        <div class="text-center pt-2 white--text">
          <h4>123,077.00</h4>
          <v-btn depressed small class="mt-2">
            CHOOSE MERON
          </v-btn>
        </div>
      </v-col>
      <v-col cols="6" class="main-bet-container wala-cont ">
        <div class="bet-head">
          WALA
        </div>
        <div class="text-center pt-2 white--text">
          <h4 color="text-white">123,077.00</h4>
          <v-btn depressed small class="mt-2">
            CHOOSE WALA
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <!-- Game trends -->
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
            GAME TRENDS
          </v-tab>
          <v-tab @click="setTab(1)">
            BET HISTORY
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="mt-2 game-trend-cont">
          <v-tab-item>
            <div class="d-flex trend-container">
              <div class="d-flex flex-column trend-col">
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
              </div>
              <div class="d-flex flex-column trend-col">
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
              </div>
              <div class="d-flex flex-column trend-col">
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
              </div>
              <div class="d-flex flex-column trend-col">
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
              </div>
              <div class="d-flex flex-column trend-col">
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
              </div>
              <div class="d-flex flex-column trend-col">
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
              </div>
              <div class="d-flex flex-column trend-col">
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
              </div>
              <div class="d-flex flex-column trend-col">
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="blue ">mdi-checkbox-blank-circle</v-icon>
              </div>
            </div>
          </v-tab-item>

          <v-tab-item>
            <v-row>
              <v-col cols="12" sm="6" md="4" class="pb-0">
                <v-card flat class="bet-history-cont px-3 py-2 white--text">
                  <div class="d-flex justify-space-between align-center">
                    <div class="">
                      <span class="caption">#123</span>
                      <p class="mb-0">WALA <span>WINS</span></p>
                    </div>
                    <div class="flex-column right  ">
                      <span class="caption">Bet Amount</span>
                      <p class="mb-0 bet-amount">3,445.00</p>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="pb-0">
                <v-card flat class=" bet-history-cont px-3 py-2 white--text">
                  <div class="d-flex justify-space-between align-center">
                    <div class="">
                      <span class="caption">#123</span>
                      <p class="mb-0">WALA <span>WINS</span></p>
                    </div>
                    <div class="flex-column right  ">
                      <span class="caption">Bet Amount</span>
                      <p class="mb-0 bet-amount">3,445.00</p>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: 0
  }),
  methods: {
    setTab(tab) {
      this.tab = tab
    }
  }
}
</script>

<style></style>
