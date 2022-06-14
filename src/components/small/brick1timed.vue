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
          rgb: [50, 50, 50],
          defaultRgb: [0, 0, 0],
          time: 10,
          set: true,
          going: false
        }
  },

  computed: {
    col() {
      return this.rgb[0] + ', ' + this.rgb[1] + ', ' + this.rgb[2];
    },

    col2() {
      return 'rgb(' + this.col + ')';
    },
  },


  methods: {

    hov() {
      this.rgb = this.defaultRgb.slice(0);
      this.set = true;
      if (this.going == false) {
        this.time = 10;
      }
    },

    leave() {
      if (this.going == false && this.set == true) {
        console.log('going true');
        this.increaseRgb();
        this.timer();
      }
    },

    increaseRgb() {
        let tmp = [];
        for (let i in this.rgb) {
          tmp.push(this.rgb[i] + 10);
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
    },

    timer() {
      console.log(this.time);
        this.checktime();
        if (this.set == true) {
          setTimeout(() => {
            this.time-- ;
            this.increaseRgb();
            this.timer();
            }, "200")
        }
    },
    checktime() {
      console.log('checking time');
      if (this.time <= 0) {
        this.set = false;
        this.going = false;
        this.time = 0;
        console.log('try clear');
        console.log(this.time);
      } else {
        this.going = true;
      }
    }


  },



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
