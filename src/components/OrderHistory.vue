<template>




    <v-container>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="shippers"
          :search="search"
          class="elevation-1"
          :rows-per-page-items='[{"text":"$vuetify.dataIterator.rowsPerPageAll", "value":-1}]'
          hide-actions
        >

          <template v-slot:items="props">
            <tr @click="rowClick(props.item)">
              <td>{{props.item.ShipperID}}</td>
              <td>{{props.item.CompanyName}}</td>
              <td>{{props.item.Phone}}</td>
            </tr>
          </template>
          <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-container>
</template>

<script>
  import axios from "axios";
  import OrderForm from './OrderForm';
  export default {
    name: "Shippers",
    data(){
      return{
        search: '',
        show: false,
        Orders:''
      }
    },

    async created() {

      axios
        .get("api/orders", {params: {table: "Orders"}})
        .then(response => {
          this.orders = response.data;
          console.log(this.employees);
        })
        .catch(e => {
          this.errors.push(e);
        })},
    methods: {

    }
  }
</script>

<style scoped>
  .disable-events {
    pointer-events: none
  }
</style>
