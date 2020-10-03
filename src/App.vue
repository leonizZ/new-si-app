<template>
  <v-app>
    <!--Navbar Side -->
    <nav-bar></nav-bar>

    <v-main class="main-cont">
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pt-0">
        <!-- If using vue-router -->

        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
        <game-switcher></game-switcher>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/Navbar'
import GameSwitcher from './components/GameSwitcher'

export default {
  components: {
    NavBar,
    GameSwitcher
  }
}
</script>
<style>
.main-cont {
  background-color: #1d2329;
}

/* Video Content */
.vid-content {
  color: #fff;
  background: #0c0f13;
}
/* Bet Container */
.main-bet-container {
  padding: 0 0 20px 0;
}
.meron-cont {
  background-color: #c62828;
}
.wala-cont {
  background-color: #0034c5;
}
.bet-head {
  text-align: center;
  padding: 10px;
  background: #00000054;
  color: #fff;
}

/* Trend Columns */
.game-trend-cont {
  background: #1e2329 !important;
}
.trend-col {
  background: #36484f;
  margin-right: 5px;
  padding: 5px;
  border-radius: 5px;
}

.bet-history-cont,
.transaction-history-cont {
  background-color: #37474f !important;
  margin-bottom: 8px;
}

/* Animate */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}

.blink {
  animation: blink 1s infinite;
}
</style>
