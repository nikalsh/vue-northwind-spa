<template>
  <table-component :data="customers" sort-by="CompanyName" sort-order="CompanyName">
    <table-column show="CustomerID" label="CustomerID" :sortable="true" :data-type="numeric"/>
    <table-column show="CompanyName" label="CompanyName"/>
    <table-column show="ContactName" label="ContactName"/>
    <table-column show="ContactTitle" label="ContactTitle"/>
    <table-column show="Address" label="Address"/>
    <table-column show="City" label="City"/>
    <table-column show="Region" label="Region"/>
    <table-column
      show="PostalCode"
      label="PostalCode"
      data-type="numeric"
      :sortable="true"
      :filterable="true"
    />
    <table-column show="Country" label="Country"/>
    <table-column show="Phone" label="Phone"/>
    <table-column show="Fax" label="Fax"/>
  </table-component>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      customers: [],
      errors: []
    };
  },
  async created() {
    axios
      .get("api/customers", { params: { table: "Customers" } })
      .then(response => {
        this.customers = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
*,
*:after,
*:before {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
