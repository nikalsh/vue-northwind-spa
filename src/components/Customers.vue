<template>
  <v-expansion-panel-content v-model="show">
    <template v-slot:header>
      <v-text-field
        prepend-icon="account_circle"
        class="disable-events"
        v-model='companyName'
        label="Customer"
      ></v-text-field>
    </template>


      <v-container>
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
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
            :items="customers"
            :search="search"
            class="elevation-1"
            :rows-per-page-items='[{"text":"$vuetify.dataIterator.rowsPerPageAll", "value":-1}]'
            hide-actions
          >

            <template v-slot:items="props">
              <tr @click="rowClick(props.item)">
                <td>{{props.item.CustomerID}}</td>
                <td>{{props.item.CompanyName}}</td>
                <td>{{props.item.ContactName}}</td>
                <td>{{props.item.Address}}</td>
                <td>{{props.item.City}}</td>
                <td>{{props.item.PostalCode}}</td>
                <td>{{props.item.Country}}</td>
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
  export default {
    name: "Customers",
    data(){
      return{
        search: '',
        show: false,
        headers: [
          {text: 'Customer ID', value: 'CustomerID'},
          {text: 'Company Name', value: 'CompanyName'},
          {text:'Contact Name',value:'ContactName'},
          {text:'Address',value:'Address'},
          {text:'City',value:'City'},
          {text:'Postal Code',value:'PostalCode'},
          {text:'Country',value:'Country'},
          {text:'Phone',value:'Phone'}
        ],
        customers: [],
        companyName: ''
      }
    },

    async created() {
      this.$bus.$on("clear", x => {
        this.companyName='';
      });
      axios
        .get("api/customers", {params: {table: "Customers"}})
        .then(response => {

          this.customers = response.data;
          console.log(this.employees);
        })
        .catch(e => {
          this.errors.push(e);
        })},
    methods: {
      rowClick(payload){
        this.show=false;
        this.companyName=payload.CompanyName;
          this.$bus.$emit("customer-payload", payload);

      }
    }
  }
</script>

<style scoped>
  .disable-events {
    pointer-events: none
  }
</style>
