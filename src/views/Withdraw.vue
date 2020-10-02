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
        <v-card color="#2C343A" class="pa-4">
          <v-form ref="form" v-model="valid" lazy-validation>
            <p class="body-2 mb-1 white--text">Amount To Withdraw (No Limit)</p>
            <v-text-field
              v-model="username"
              placeholder="0"
              single-line
              dense
              solo
            ></v-text-field>
            <p class="body-2 mb-1 white--text">Outlet</p>
            <v-select
              v-model="select"
              :items="items"
              label="Select Outlet"
              data-vv-name="select"
              required
              solo
              dense
            ></v-select>
            <p class="body-2 mb-1 white--text">PH Contact Number (Optional)</p>
            <p class="caption mb-1 white--text">
              This will be used to inform you the status of your withdrawal. By
              default, this is the same as your account's mobile number.
            </p>
            <v-text-field
              v-model="username"
              placeholder="09"
              single-line
              solo
              dense
            ></v-text-field>

            <v-btn block color="warning" class="mr-4" large>
              SUBMIT
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    select: null,
    valid: true,
    username: null,
    items: ['Coordinator', 'Color Fun Game', 'Bank', 'Gcash ', 'MLhuillier']
  })
}
</script>
<style></style>
