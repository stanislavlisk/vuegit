




<script>

export default {
  data() {
    return {
      count: 0,
      dRGB: [100, 100, 100],
      MyRGB: {red: 120, green: 100, blue: 200}
    }
  },

  methods: {

    changeMyRgb(color, incr) {
      let colorRate = 10;
      let tmpobj1 = {};
      Object.assign(tmpobj1,this.MyRGB);
      console.log("lvl_1")

      if (incr === 'add') {
        tmpobj1[color] += colorRate;
        if (tmpobj1[color] > 255) {
          tmpobj1[color] = 255;
          return tmpobj1;
        }
        console.log('lvl_1a   ' + tmpobj1);
        return tmpobj1;
      } else if (incr ==='sub') {
        tmpobj1[color] -= colorRate;
        if (tmpobj1[color] < 0) {
          tmpobj1[color] = 0;
          return tmpobj1;
        }
        console.log('lvl_1b');
        return tmpobj1;
      } else {
        console.log('lvl_1_err');
      }
    },

    myObjtoRGB(myObj) {
      let myObjvalues = Object.values(myObj);
      let newRGB = myObjvalues.join();
      console.log('lvl_2   ' + newRGB);
      return newRGB;
    },

    changeDomRGB(color, incr) {
      let tmpobj = this.changeMyRgb(color, incr);
      let domRgb = this.myObjtoRGB(tmpobj);
      console.log('lvl_3   ' + domRgb);
      this.MyRGB = tmpobj;
      this.dRGB = domRgb;
      console.log(this.MyRGB);
      console.log('...' + this.dRGB);
    }


  }
}
</script>



<template>

<div>
<button id="red" @click="changeDomRGB('red','add')">color3</button>
<button id="red" @click="changeDomRGB('green','add')">color3</button>
<button id="red" @click="changeDomRGB('blue','add')">color3</button>
<table :style="{ backgroundColor: 'rgb(' + dRGB + ')' }">
  <tr>
    <td>RGB  {{dRGB}}</td>
  </tr>
</table>
<button id="red" @click="changeDomRGB('red','sub')">color3</button>
<button id="red" @click="changeDomRGB('green','sub')">color3</button>
<button id="red" @click="changeDomRGB('blue','sub')">color3</button>

</div>
</template>
