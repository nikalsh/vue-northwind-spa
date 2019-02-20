<template>
      <div id="content">
        <div id="one">NORTHWIND SPA</div>
        <div id="two"></div>
        <div class="three">3</div>
        <div class="four">4</div>
        <div class="five">5</div>
        <div class="six">6</div>
        <div class="seven">7</div>
        <div class="eight">8</div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Northwind SPA"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content{
    display:grid;

    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, minmax(150px, auto));

    margin: 0 auto;
    grid-gap: 10px;

}

#one{
    grid-column: 1/7;

    font-size: 3em;
}

#two{
    grid-column: 1/7;
    grid-row: 2/4;    
    
    padding: 0px;
}

#content div{
    background: #d41313;
    padding:30px;

}

#content div:nth-child(even){
    background: black;
    padding:30px;

}
</style>
