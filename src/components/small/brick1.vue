<template>
<table class="brick" @mouseenter="hov()" @mouseleave="leave()">

  <tr>
    <td><p>sggsdg</p></td>
  </tr>
</table>
</template>




<script>
export default {
  data() {
      return {
          color: 'rgb(100,100,100)',
          time: 0,
          start: false,
          rgb: [50, 50, 50]
      }
  },
  computed: {
    col () {
      return this.rgb[0] + ', ' + this.rgb[1] + ', ' + this.rgb[2];
    },
    col2 () {
      return this.color = 'rgb(' + this.col + ')';
    }
  },

  methods: {
    hov () {
      this.color = this.col2;
    },
    leave () {
      let tmp = [];
      for (let i in this.rgb) {
        tmp.push(this.rgb[i] + 20);
        console.log(tmp);
      };
      for (let i in tmp) {
        if (tmp[i] > 255) {
          tmp[i] = 255;
        } else if (tmp[i] < 0) {
          tmp[i] = 0;
        };
      };
      this.rgb = tmp.slice(0);
      console.log(this.rgb);
      console.log('this col2   ' + this.col2);

    },
  }


}
</script>



<style scoped>
  .brick {
    font-size: 0%;
    width: 10px;
    height: 10px;
    max-height: 10px;
    background-color: v-bind(col2);
  }
</style>
