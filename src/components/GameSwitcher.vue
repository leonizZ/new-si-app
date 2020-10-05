<template>
  <v-container
    v-if="currentRouteName !== 'login' && currentRouteName !== 'register'"
  >
    <v-row class="child-flex">
      <v-col cols="12">
        <v-speed-dial
          v-model="fab"
          transition="slide-x-reverse-transition"
          right
          bottom
          direction="left"
        >
          <template v-slot:activator>
            <v-btn v-model="fab" color="amber darken-3" dark fab small>
              <v-icon v-if="fab">
                mdi-chevron-right
              </v-icon>
              <v-icon v-else>
                mdi-chevron-left
              </v-icon>
            </v-btn>
          </template>
          <v-btn fab small>
            <v-avatar class="game-btn-avatar">
              <img src="@/assets/si-btn.png" alt="Sabong International" />
            </v-avatar>
          </v-btn>
          <v-btn fab small>
            <v-avatar class="game-btn-avatar">
              <img src="@/assets/coin-btn.png" alt="Coin Master" />
            </v-avatar>
          </v-btn>
          <v-btn fab small>
            <v-avatar class="game-btn-avatar">
              <img src="@/assets/cfg-btn.png" alt="Color Fun Game" />
            </v-avatar>
          </v-btn>
          <v-btn fab small>
            <v-avatar class="game-btn-avatar">
              <v-icon color="orange">mdi-message</v-icon>
            </v-avatar>
          </v-btn>
        </v-speed-dial>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    fab: false
  }),
  computed: {
    currentRouteName() {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.v-speed-dial {
  position: fixed !important;
}
.game-btn-avatar {
  border: 2px solid #fdd835;
  background: #fff;
}
</style>
