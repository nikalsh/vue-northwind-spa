<template>
  <div id="orderform">
    <div id="dropForms">
      <div class="row">
        <label>Customer:</label>
        <input name="selectCustomer" placeholder :value="customer.CompanyName">
      </div>

      <div class="row">
        <label>Customer ID:</label>
        <input name="selectCustomerID" placeholder :value="customer.CustomerID">
      </div>

      <div class="row">
        <label>Our Reference:</label>
        <select v-model="selectedEmployee" name="selectEmployee">
          <option
            v-for="employee in employees"
            :key="employee.id"
            :value="employee"
          >{{employee.FirstName}} {{employee.LastName}}</option>
        </select>
      </div>

      <div class="row">
        <label>Your Reference:</label>
        <input name="selectReference" placeholder :value="customer.ContactName">
      </div>

      <div class="row">
        <label>Shipper:</label>
        <input name="selectShipper" placeholder :value="shipper.CompanyName">
      </div>
      <div class="row">
        <label>Freight:</label>
        <input name="selectFreight" v-model="freight.cost">
      </div>
    </div>

    <!-- </select> -->
    <div id="productList">
      <table-component
        :data="products"
        sort-by="ProductName"
        sort-order="ProductName"
        :show-filter="false"
        :show-caption="false"
        filter-no-results=" "
        @rowClick="deleteRow"
      >
        <!-- :hidden="true" -->
        <table-column show="ProductID" label="ID" data-type="numeric" :sortable="true"/>
        <table-column show="ProductName" label="Product"/>
        <table-column show="QuantityPerUnit" label="QuantityPerUnit" :hidden="true"/>
        <table-column show="UnitPrice" label="Price" data-type="numeric" :sortable="true"/>
        <table-column
          show="UnitsInStock"
          label="Stock"
          data-type="numeric"
          :sortable="true"
          :hidden="true"
        />
        <table-column
          show="UnitsOnOrder"
          label="Orderstock"
          data-type="numeric"
          :sortable="true"
          :hidden="true"
        />
        <table-column
          show="ReorderLevel"
          label="ReorderLevel"
          data-type="numeric"
          :sortable="true"
          :hidden="true"
        />
        <!-- <table-column show="Discontinued" label="Discontinued"/> -->
      </table-component>
      <button v-on:click="clear">Clear</button>
    </div>
    <div id="buttons">
      Total: {{ totalCost }}
      <br>
      <button v-on:click="save">Save Order</button>
      <button v-on:click="cancel">Cancel Order</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "orderform",
  data() {
    return {
      products: [],
      employees: [],
      selectedEmployee: "",
      customer: "",
      shipper: "",
      freight: { cost: 250 }
    };
  },
  async created() {
    axios
      .get("api/employees", { params: { table: "Employees" } })
      .then(response => {
        console.log(response.data);
        this.employees = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      }),
      //eventListeners
      this.$bus.$on("product-payload", payload => {
        this.products.push(payload);
      }),
      this.$bus.$on("customer-payload", payload => {
        this.customer = payload;
      }),
      this.$bus.$on("shipper-payload", payload => {
        this.shipper = payload;
      });
  },

  methods: {
    clear: function(event) {
      this.clearProductList();
    },

    save: function(event) {
      //AXIOS POST REQUEST NEEDS TO HAPPEN HERE
      // psuedo-code:
      // axiost.post(new order (products, customer, selectedEmployee, shipper))
      let sum = 0;

      this.clearProductList();
    },

    cancel: function(event) {
      this.customer = "";
      this.shipper = "";
      this.clearProductList();
    },
    deleteRow: function(payload) {
      this.products.splice(payload.data.vueTableComponentInternalRowId, 1);
    },

    clearProductList: function() {
      this.products = [];
    }
  },
  computed: {
    totalCost: function() {
      let sum = 0;
      for (let i = 0; i < this.products.length; i++) {
        sum += this.products[i].UnitPrice * Math.pow(10, 4);
      }
      return sum / Math.pow(10, 4);
    }
  }
};
</script>
<!-- styling for the component -->
<style>
#buttons {
  align-self: flex-end;
  border: 1px solid black;
}
#productList {
  display: inline-block;
  text-align: center;
  border: 1px solid black;
  width: auto;
}
#orderform {
  border: 1px solid black;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  color: black;
}

#dropForms {
  border: 1px solid black;
  /* text-align: center; */
  /* display: inline-block; */
  /* width: auto; */
  /* display: flex; */
  /* float: left; */

  width: auto;
  margin-top: 18px;
}

label {
  display: table-cell;
  text-align: right;
}
input {
  display: table-cell;
}
select {
  display: table-cell;
}
div.row {
  display: table-row;
}

#productList {
  color: black;
}

#productList .table-component {
  margin: 0;
}

#productList .table-component__table th {
  /* padding: 0.75em 1.25em; */
  padding: 0.1em 0.25em;
  vertical-align: top;
  text-align: left;
}

#productList .table-component__table td {
  /* padding: 0.75em 1.25em; */
  padding: 0.1em 0.25em;
  vertical-align: top;
  text-align: left;
}
</style>
