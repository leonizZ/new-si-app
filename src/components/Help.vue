<template>
  <v-row>
    <v-col>
      <v-card dark class="pa-4 " flat color="#2c343a">
        <p>
          1. Minimum bet is
          <span class="amber--text font-weight-bold">100</span>
        </p>

        <p>
          2. Betting window is
          <span class="amber--text font-weight-bold">3 to 5 mins</span> . There
          are 3 game status;
          <span class="amber--text font-weight-bold">OPEN, LAST CALL</span> and
          <span class="amber--text font-weight-bold">CLOSED</span>. Once the
          betting is CLOSED, bets will not be accepted.
        </p>

        <p>
          3. Payout Style:
          <span class="amber--text font-weight-bold">Sports betting</span> .
        </p>
        <p>
          4. Payout computation(odds): % based on total bet per side Example:
          100 bet at 180% wins 180
        </p>
        <p>
          5. If fight is a draw, bets are returned
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style></style>
