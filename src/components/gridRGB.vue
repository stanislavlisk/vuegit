<template class="">
  <table class="fle nopads" >

      <brick1timed class="fleself nopads" v-for="item in array1"/>

  </table>

</template>

<script>
    import brick1timed from './small/brick1timed.vue';

    export default {
      components: {
        brick1timed
      },
      data() {
        return {
          gridx: 100
        }
      },
      computed: {
        array1() {
          let arr = [];
          for (let i = 0; i < this.gridx; i++) {
            arr.push(i);
          }
          return arr;
        }

      },
      mounted(){
       console.log(this.array1);
      }






    }
</script>

<style scoped>
  .fle {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 0px 0px;
    width: 100px;
    height: 100px;
    line-height: 0px;
    background-color: red;
  }
  .fleself {
    display: inline-flex;
    line-height: 0px;
    font-size: 0px;
    font-size: 0%;


  }
  .nopads {
    border-width: 0px;
    padding: 0px;
    margin: 0px;
    letter-spacing: 0px;
  }
  .text0 {
    font-size: 0px;
  }
  .brickcont {
    display: flex;
    max-width: 20px;
    background-color: red;
    line-height: 0px;
  }
  .brickitem {
    display: inline-flex;
    line-height: 0px;


  }
  .inline {
    display: inline-block;
  }
  .igrid {
    display: inline-grid;

  }
  .fixtab {
    background-color: red;
    max-width: 100px;
    max-height: 100px;
    line-height: 0px;

  }
</style>
