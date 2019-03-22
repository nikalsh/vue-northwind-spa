<template>
  <div id="orderform">
    <div id="app">
      <v-app id="inspire">
        <v-container>
          <v-tabs
            v-model="active"
            color="blue"
            dark
            slider-color="teal"
          >
            <v-tab ripple="">
              Order
            </v-tab>
            <v-tab-item>
              <v-expansion-panel>
                <Employees></Employees>
                <Customers></Customers>
                <v-menu ma-4 v-model="timeMenu" :close-on-content-click="false" :nudge-right="40" lazy
                        transition="scale-transition" offset-y full-width min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      class="px-4"
                      v-model="requiredDate"
                      label="Required Date"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="requiredDate" @input="timeMenu = false"></v-date-picker>
                </v-menu>
                <Shippers></Shippers>
                <v-text-field
                  class="px-4"
                  v-model="freight"
                  label="Freight cost"
                  prepend-icon="train"
                  required></v-text-field>
                <Products></Products>
              </v-expansion-panel>
              <v-flex pa-2 xs4 offset-xs4>
                <v-card dark color="primary">
                  <v-card-text class="px-0">Total: {{ getTotalCost }}</v-card-text>
                </v-card>

              </v-flex>
              <div pa-2 xs4 offset-xs2>
                <v-btn color="success" v-on:click="save">Send Order</v-btn>
                <v-btn color="error" @click="clear" v-on:click="cancel">Cancel Order</v-btn>
              </div>
            </v-tab-item>
            <v-tab ripple="">
              History
            </v-tab>
            <v-tab-item>
              <OrderHistory></OrderHistory>
            </v-tab-item>
          </v-tabs>


        </v-container>
      </v-app>
    </div>

  </div>
</template>

<script>
  import axios from "axios";
  import Datepicker from "vuejs-datepicker";
  import Customers from './Customers';
  import Employees from './Employees';
  import Shippers from './Shippers';
  import Products from './Products';
  import OrderHistory from './OrderHistory';
  export default {
    name: "OrderForm",

    data() {
      return {
        employeeID: "",
        customer: "",
        shipper: "",
        freight: '',
        requiredDate: "",
        orderDate: "",
        timeMenu: false,
        orderDetails: []
      };
    },
    async created() {
      //eventListeners
      this.$bus.$on("product-payload", payload => {
        this.orderDetails = payload;
      });
        this.$bus.$on("employee-payload", payload => {
          this.employeeID = payload.EmployeeID;
        });
        this.$bus.$on("customer-payload", payload => {
          this.customer = payload;
        });
        this.$bus.$on("shipper-payload", payload => {
          this.shipper = payload;
        });
    },

    methods: {
      clear: function (event) {
        this.clearProductList();
      },

      save: function (event) {
        console.log(this.customer);
        console.log(this.employeeID);
        console.log(this.getCurrentDate);
        console.log(this.requiredDate);
        console.log(this.shipper);
        console.log(this.orderDetails);
        axios.post("api/save", {

          "CustomerID": this.customer.CustomerID,
          "EmployeeID": this.employeeID,
          "OrderDate": this.getCurrentDate,
          "RequiredDate": this.requiredDate,
          "ShipVia": this.shipper.ShipperID,
          "Freight": this.freight,
          "ShipName": this.customer.CompanyName,
          "ShipAddress": this.customer.Address,
          "ShipCity": this.customer.City,
          "ShipRegion": this.customer.Region,
          "ShipPostalCode": this.customer.PostalCode,
          "ShipCountry": this.customer.Country,
          "OrderDetails": this.orderDetails
        })
          .then((res) => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
          })
          .catch((error) => {
            console.error(error)
          })

        this.cancel();
      },

      cancel: function (event) {
        this.employeeID= "";
          this.freight='';
          this.orderDetails=[""];
        this.customer = "";
        this.shipper = "";
        this.requiredDate = "";
        this.$bus.$emit("clear");
      },
      getCurrentDate: function () {
        this.orderDate = new Date();
        return new Date().toLocaleString().split(" ")[0];
      }
    },
    computed: {
      getTotalCost: function () {
        return parseInt(this.freight)+parseInt(this.orderDetails.reduce((a, b) => a + b.UnitPrice * b.Quantity, 0));
      }

    },
    components: {
      Datepicker,
      Employees: Employees,
      Customers: Customers,
      Shippers: Shippers,
      Products: Products,
  OrderHistory:OrderHistory
    }
  };
</script>
<!-- styling for the component -->
<style>

  #orderform {
    /* border: 1px solid black; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
    color: black;
  }

</style>

