<template>
  <table-component :data="shippers" sort-by="ShipperID" sort-order="ShipperID" @rowClick="handleRowClick">
    <table-column show="ShipperID" label="ShipperID" :sortable="true" />
    <table-column show="CompanyName" label="CompanyName"/>
    <table-column show="Phone" label="Phone"/>
    </table-component>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      shippers: [],
      errors: []
    };
  },
  async created() {
    axios
      .get("api/shippers", { params: { table: "Shippers" } })
      .then(response => {
        this.shippers = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
,
  methods: {
    handleRowClick: function(payload) {
      this.$bus.$emit("shipper-payload", payload.data);
    }
  
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
