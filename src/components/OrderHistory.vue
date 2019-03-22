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
        Orders:[]
        CustomerID: 'ALFKI',
        OrderID: 11212,
        EmployeeID: 3,
        OrderDate: 2019-03-19T21:58:01.000Z,
        RequiredDate: 2019-03-18T21:58:00.000Z,
        ShippedDate: null,
        ShipVia: 3,
        Freight: '250.0000',
        ShipName: 'Alfreds Futterkiste',
        ShipAddress: 'Obere Str. 57',
        ShipCity: 'Berlin',
        ShipRegion: 'null',
        ShipPostalCode: '12209',
        ShipCountry: 'Germany',
        CompanyName: 'Alfreds Futterkiste',
        ContactName: 'Maria Anders',
        ContactTitle: 'Sales Representative',
        Address: 'Obere Str. 57',
        City: 'Berlin',
        Region: null,
        PostalCode: '12209',
        Country: 'Germany',
        Phone: '030-0074321',
        Fax: '030-0076545' },

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
