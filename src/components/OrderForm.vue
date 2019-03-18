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
        <label>Order Date:</label>
        <input name="orderDate" :value="getCurrentDate">
      </div>

      <div class="row">
        <label>Required Date:</label>
        <datepicker format="yyyy-MM-dd" v-model="required.date"></datepicker>
      </div>

      <div class="row">
        <label>Your Reference:</label>
        <input name="selectReference" placeholder :value="customer.ContactName">
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
        <label>Shipper:</label>
        <select v-model="selectedShipper" name="selectShipper">
          <option
            v-for="shipper in shippers"
            :key="shipper.id"
            :value="shipper"
          >{{shipper.CompanyName}}</option>
        </select>
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
        <table-column show="Quantity" label="Quantity" data-type="numeric"/>
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
      Total: {{ getTotalCost }}
      <br>
      <button v-on:click="save">Save Order</button>
      <button v-on:click="cancel">Cancel Order</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Datepicker from "vuejs-datepicker";

export default {
  name: "orderform",
  data() {
    return {
      products: [],
      Quantity: 0,
      employees: [],
      selectedEmployee: "",
      customer: "",
      shippers: [],
      selectedShipper: "",
      freight: { cost: 250 },
      required: { date: "" },
      orderDate: { date: ""}
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
      axios
        .get("api/shippers", { params: { table: "Shippers" } })
        .then(response => {
          console.log(response.data);
          this.shippers = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });

    //eventListeners
    this.$bus.$on("product-payload", payload => {
      var x=this.products.findIndex(function (element) {
        return element===payload;
      });
      if (x===-1){
        this.$set( payload, 'Quantity', 1 );
        this.products.push(payload);
      }else{
        this.products[x].Quantity++;
      }

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
      var orderInfo =[];
      this.products.forEach(function (p) {
        var c={"ProductID": p.ProductID, "UnitPrice": p.UnitPrice, "Quantity": p.Quantity};
        orderInfo.push(c);
      });

      axios.post("api/save",  {

        "CustomerID": this.customer.CustomerID,
        "EmployeeID": this.selectedEmployee.EmployeeID,
        "OrderDate": this.orderDate.date,
        "RequiredDate": this.required.date,
        "ShipVia": this.selectedShipper.ShipperID,
        "Freight": this.freight.cost,
        "ShipName": this.customer.CompanyName,
        "ShipAddress": this.customer.Address,
        "ShipCity": this.customer.City,
        "ShipRegion": this.customer.Region,
        "ShipPostalCode": this.customer.PostalCode,
        "ShipCountry": this.customer.Country,
        "OrderDetails": orderInfo
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

    cancel: function(event) {
      this.customer = "";
      this.shipper = "";
      this.required.date = "";

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
    getTotalCost: function() {
      let sum = 0;
      for (let i = 0; i < this.products.length; i++) {
        sum += this.products[i].UnitPrice * Math.pow(10, 4);
      }
      return sum / Math.pow(10, 4);
    },
    getCurrentDate: function() {
// .toLocaleString().split(" ")[0];
      this.orderDate.date = new Date()
      return new Date().toLocaleString().split(" ")[0];
    }
  },
  components: {
    Datepicker
  }
};
</script>
<!-- styling for the component -->
<style>
.vdp-datepicker__calendar{
  position: fixed;
  

}
#buttons {
  align-self: flex-end;
  /* border: 1px solid black; */
}
#productList {
  display: inline-block;
  text-align: center;
  /* border: 1px solid black; */
  width: auto;
}
#orderform {
  /* border: 1px solid black; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  color: black;
}

#dropForms {
  /* border: 1px solid black; */
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
