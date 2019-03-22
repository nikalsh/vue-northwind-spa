<template>
  <v-expansion-panel-content v-model="show">
    <template v-slot:header>
      <v-text-field
        prepend-icon="account_circle"
        class="disable-events px-0.8"
        v-model='shipperName'
        label="Shipper"
      ></v-text-field>
    </template>


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
  </v-expansion-panel-content>
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
        headers: [
          {text: 'Shipper ID', value: 'ShipperID'},
          {text: 'Company Name', value: 'CompanyName'},
          {text:'Phone',value:'Phone'}
        ],
        shippers: [],
        shipperName: ''
      }
    },

    async created() {

      axios
        .get("api/shippers", {params: {table: "Shippers"}})
        .then(response => {

          this.shippers = response.data;
          console.log(this.employees);
        })
        .catch(e => {
          this.errors.push(e);
        })},
    methods: {

      rowClick(payload){
        this.show=false;
        this.shipperName=payload.CompanyName;
        this.$bus.$emit("shipper-payload", payload);
      }
    }
  }
</script>

<style scoped>
  .disable-events {
    pointer-events: none
  }
</style>
