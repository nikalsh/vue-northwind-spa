<template>
  <div id="shippers">
    <ListShippers></ListShippers>
  </div>
</template>

<script>
  import ListShippers from "./ListShippers";
  export default {
    name: 'Shippers',
    components: {
      ListShippers: ListShippers,
    }

  }

</script>
<!-- styling for the component -->
<style>
#shippers {
  
}
</style>

<!--Applikationen  skall göras som en SPA applikation där endast data hämtas från backend( databasen)-->
<!--Föreställ er att ni är ordermottagare på Deligrossisten 'Northwind enterprises' och kunder ringer till företaget och beställer varor från er. Kunderna är detaljister dvs mindre affärer som också säljer deliprodukter.-->
<!--Ni skall alltså hantera hela beställningsprocessen i applikationen där slutprodukten är en komplett beställning-->
<!--Ni kommer att få en scriptfil som genererar databasen och dess tabeller till er lokala sql server.-->
<!--Ni kan redan nu studera databasens schema här-->
