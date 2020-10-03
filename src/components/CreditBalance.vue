<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto white--text" color="#2C343A" flat>
        <v-card-text>
          <p class="float-right caption grey--text text-lighten-1">
            Account Credits
          </p>
          <p
            class="mb-0 orange--text credit-bal font-weight-bold"
            style="font-size:20px"
          >
            P 123,123.00
          </p>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-row class="ma-0">
            <v-col cols="6" class="pr-1">
              <v-btn depressed block small color="success">
                Add Credits
              </v-btn>
            </v-col>
            <v-col cols="6" class="pl-1">
              <v-btn depressed block small color="warning">
                Withdraw
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style></style>
