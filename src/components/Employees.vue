<template>
  <v-expansion-panel-content v-model="show">
    <template v-slot:header>
      <v-text-field
        prepend-icon="account_circle"
        class="disable-events"
        v-model='employeeName'
        label="Employee"
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
          :items="employees"
          :search="search"
          class="elevation-1"
          :rows-per-page-items='[{"text":"$vuetify.dataIterator.rowsPerPageAll", "value":-1}]'
          hide-actions
        >

          <template v-slot:items="props">
            <tr @click="rowClick(props.item)">
              <td><v-img v-bind:src="'data:image/png;base64,'+props.item.Photo"
                       max-height="40"
                       contain/></td>
              <td>{{ props.item.EmployeeID }}</td>
              <td>{{ props.item.FirstName }} {{ props.item.LastName }}</td>
              <td>{{ props.item.Title }}</td>
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
    name: "Employees",
    data() {
      return {
        search: '',
        show: false,
        headers: [
          {text: 'photo', value: 'Photo'},
          {text: 'Employee ID', value: 'EmployeeID'},
          {text: 'Name', value: 'LastName'},
          {text: 'Title', value: 'Title'}
        ],
        employees: [],
        employeeName: ''
      }
    },

    async created() {
      this.$bus.$on("clear", x => {
        this.employeeName='';
      });
      axios
        .get("api/employees", {params: {table: "Employees"}})
        .then(response => {

          this.employees = response.data;
          console.log(this.employees);
        })
        .catch(e => {
          this.errors.push(e);
        })
    },
    methods: {
      rowClick(payload) {
        this.show = false;
        this.employeeName = payload.FirstName + ' ' + payload.LastName
        this.$bus.$emit("employee-payload", payload);
      }
    }
  }
</script>

<style scoped>
  .disable-events {
    pointer-events: none
  }
</style>
