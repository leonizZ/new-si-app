<template>
  <div class="">
    <video-play></video-play>
    <!-- Video Content -->
    <v-row>
      <v-col class="vid-content">
        <div class="float-right">
          <p class="caption mb-0">
            <v-avatar color="error" size="8" class="blink"></v-avatar>
            Not Open
          </p>
        </div>
        <div class="">
          <p class="mb-0">Fight #123</p>
          <div class="d-flex align-center">
            <span>
              <v-btn x-small class="error">MIRROR</v-btn>
            </span>
            <span class="ml-1">
              <p class="caption mb-0">PRIVATE SABONG(350 Exp. Fights)</p>
            </span>
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
          <v-btn
            depressed
            small
            class="mt-2 red--text"
            @click="m_dialog = true"
          >
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
          <v-btn
            depressed
            small
            class="mt-2 blue--text"
            @click="w_dialog = true"
          >
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

        <v-tabs-items v-model="tab" class="mt-2 game-trend-cont" touchless>
          <v-tab-item>
            <div class="d-flex " id="trend-container">
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
              <div class="d-flex flex-column trend-col">
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
              </div>
              <div class="d-flex flex-column trend-col">
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
                <v-icon color="red ">mdi-checkbox-blank-circle</v-icon>
              </div>
            </div>
          </v-tab-item>

          <v-tab-item>
            <v-row>
              <v-col cols="12" sm="6" md="4" class="py-0">
                <v-card flat class="bet-history-cont px-3 py-2 white--text">
                  <div class="d-flex justify-space-between align-center">
                    <div class="">
                      <span class="caption grey--text">#123</span>
                      <p class="body-2 mb-0">
                        WALA <span class="wins">WINS</span>
                      </p>
                    </div>
                    <div class="flex-column right text-right">
                      <div class="d-flex">
                        <span class="mr-3">
                          <span class="caption grey--text">Bet Amount</span>
                          <p class="body-2 mb-0 bet-amount ">3,445.00</p>
                        </span>
                        <span>
                          <span class="caption grey--text">Win Amount</span>
                          <p class="body-2 mb-0 bet-amount win">3,445.00</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="py-0">
                <v-card flat class=" bet-history-cont px-3 py-2 white--text">
                  <div class="d-flex justify-space-between align-center">
                    <div class="">
                      <span class="caption grey--text">#123</span>
                      <p class="body-2 mb-0">
                        WALA <span class="lose">WINS</span>
                      </p>
                    </div>
                    <div class="flex-column right text-right">
                      <span class="caption grey--text">Bet Amount</span>
                      <p class="body-2 mb-0 bet-amount lose">3,445.00</p>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="py-0">
                <v-card flat class=" bet-history-cont px-3 py-2 white--text">
                  <div class="d-flex justify-space-between align-center">
                    <div class="">
                      <span class="caption grey--text">#123</span>
                      <p class="body-2 mb-0"><span class="draw">DRAW</span></p>
                    </div>
                    <div class="flex-column text-right ">
                      <span class="caption grey--text">Bet Amount</span>
                      <p class="body-2 mb-0 bet-amount draw">3,445.00</p>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <!-- Dialogs -->
    <v-row>
      <v-col>
        <div class="text-center">
          <v-dialog v-model="m_dialog">
            <v-card>
              <v-card-title class="body-1 red darken-1 white--text">
                Choose Meron
              </v-card-title>

              <v-card-text class="px-3">
                <div class="py-4">
                  <v-text-field
                    v-model="getSelection"
                    class="bet-input"
                    placeholder="0.00"
                    solo-inverted
                    dense
                    flat
                    append-icon="mdi-tag-multiple"
                  >
                  </v-text-field>
                  <v-chip-group
                    v-model="selection"
                    active-class="red white--text"
                    column
                  >
                    <div class=" justify-center">
                      <v-chip
                        class="bet-btn"
                        v-for="bet in betOption"
                        :key="bet"
                        :value="bet"
                      >
                        {{ bet }}
                      </v-chip>
                    </div>
                  </v-chip-group>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-dialog v-model="w_dialog">
            <v-card>
              <v-card-title class="body-1 blue darken-2 white--text">
                CHOOSE WALA
              </v-card-title>

              <v-card-text class="px-3">
                <div class="py-4">
                  <v-text-field
                    v-model="getSelection"
                    class="bet-input"
                    placeholder="0.00"
                    solo-inverted
                    dense
                    flat
                    append-icon="mdi-tag-multiple"
                  >
                  </v-text-field>
                  <v-chip-group
                    v-model="selection"
                    active-class="blue white--text"
                    column
                  >
                    <div class=" justify-center">
                      <v-chip
                        class="bet-btn"
                        v-for="bet in betOption"
                        :key="bet"
                        :value="bet"
                      >
                        {{ bet }}
                      </v-chip>
                    </div>
                  </v-chip-group>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VideoPlay from '@/components/VideoPlay'
export default {
  components: {
    VideoPlay
  },
  data: () => ({
    tab: 0,
    text: 'center',
    m_dialog: false,
    w_dialog: false,
    selection: null,
    betOption: ['All In', '5000', '3000', '1500', '1000', '500', '200', '100']
  }),
  methods: {
    setTab(tab) {
      this.tab = tab
    }
  },
  computed: {
    getSelection() {
      return this.selection
    }
  }
}
</script>

<style scoped>
.bet-btn {
  width: 21.5%;
}
.trend-cont {
  margin: 20px 0;
  background: #2c3439;
  border-radius: 5px;
}
#trend-container {
  overflow-y: scroll;
}

/* width */
#trend-container ::-webkit-scrollbar {
  width: 5px;
}

/* Track */
#trend-container ::-webkit-scrollbar-track {
  background-color: #f3f6ff;
}

/* Handle */
#trend-container ::-webkit-scrollbar-thumb {
  background: #1085e4;
  border-radius: 5px;
}

/* Handle on hover */
#trend-container ::-webkit-scrollbar-thumb:hover {
  background: #1275c6;
}
</style>
