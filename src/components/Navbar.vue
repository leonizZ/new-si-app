<template>
  <div class="">
    <v-app-bar
      color="#0c0f13"
      dark
      flat
      dense
      v-if="currentRouteName !== 'login' && currentRouteName !== 'register'"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <p class=" mb-0 text-capitalize" v-if="currentRouteName !== 'gameplay'">
        {{ currentRouteName }}
      </p>
      <v-spacer></v-spacer>
      <p class="mb-0 font-weight-medium amber--text text-accent-4">
        123,000.00
        <span> <v-icon color="amber accent-4">mdi-tag-multiple</v-icon></span>
      </p>
      <v-btn icon>
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-card class="pa-4" color="#2C343A " dark tile flat>
        <p class="mb-0 ">John Doe</p>
        <p class="caption">091548888669</p>
      </v-card>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="amber--text text--darken-3"
        >
          <v-list-item link @click="goTo('/')">
            <v-list-item-icon>
              <v-icon>mdi-play</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Play</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="goTo('/help')">
            <v-list-item-icon>
              <v-icon>mdi-help-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-subheader>WALLET</v-subheader>
          <v-list-item link @click="goTo('/add-credits')">
            <v-list-item-icon>
              <v-icon>mdi-plus-box</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add Credits</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="goTo('/withdraw')">
            <v-list-item-icon>
              <v-icon>mdi-cached</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Withdraw</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="goTo('/account')">
            <v-list-item-icon>
              <v-icon>mdi-cached</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Transactions</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-subheader>ACCOUNT</v-subheader>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-shield</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="goTo('/login')">
            <v-list-item-icon>
              <v-icon>mdi-power</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Sign Out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),
  methods: {
    goTo(path) {
      this.$router.push({ path: path }).catch(() => {
        this.drawer = false
      })
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name
    }
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
