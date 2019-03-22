<template>
  <v-expansion-panel-content v-model="show">
    <template v-slot:header>
      <v-layout row justify-left><v-icon class="mr-2"> chat</v-icon>   Products</v-layout>

    </template>


    <v-container>
      <v-card>
        <v-card-title>
          <v-btn color="success"
                 @click="save">
            Save</v-btn>
          <v-btn color="error">Clear</v-btn>
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
          :items="products"
          :search="search"
          class="elevation-1"
          :rows-per-page-items='[10,25,50,{"text":"$vuetify.dataIterator.rowsPerPageAll", "value":-1}]'
        >

          <template v-slot:items="props">
            <tr>
              <td>{{props.item.ProductID}}</td>
              <td>{{props.item.ProductName}}</td>
              <td>{{props.item.QuantityPerUnit}}</td>
              <td>{{props.item.UnitPrice}}</td>
              <td>{{props.item.UnitsInStock}}</td>
              <td>{{props.item.CategoryName}}</td>
              <td>{{props.item.CompanyName}}</td>

              <td>
                <v-edit-dialog
                  :return-value.sync="props.item.Quantity"
                  lazy
                > {{ props.item.Quantity }}
                  <template v-slot:input >
                    <v-text-field

                      v-model="props.item.Quantity"
                      label="Edit"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </td>
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
    name: "Products",
    data(){
      return{
        search: '',
        show: false,
        headers: [
          {text:'Product ID',value:'ProductID'},
          {text:'Product Name',value:'ProductName'},
          {text:'Quantity Per Unit',value:'QuantityPerUnit'},
          {text:'Unit Price',value:'UnitPrice'},
          {text:'Units in stock',value:'UnitsInStock'},
          {text:'Category Name',value:'CategoryName'},
          {text:'Company Name',value:'CompanyName'},
          {text:'Quantity',value:'Quantity'}
    ],
        products: []
      }
    },

    async created() {
      this.$bus.$on("clear", x => {
        this.products.map(e=> e.Quantity=0);
      });

      axios
        .get("api/products", { params: { table: "Products" } })
        .then(response => {
          response.data.map( e => e.Quantity='0');
          this.products = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    methods: {
        save(){
          var payload= this.products.filter(e=> e.Quantity>0).map(p=>{
            console.log(p);
            return {"ProductID": p.ProductID, "UnitPrice": p.UnitPrice, "Quantity": p.Quantity, "Discount": p.Discount}
          });
          console.log(payload);
          this.$bus.$emit("product-payload", payload);
        }
    }
  }
</script>


