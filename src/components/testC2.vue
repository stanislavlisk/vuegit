

<script>
// variable
export default {
  data() {
    return { a: 1 }
  },
  computed: {
    // readonly
    aDouble() {
      return this.a * 2
    },
    // writable
    aPlus: {
      get() {
        return this.a + 1
      },
      set(v) {
        this.a = v - 1
      }
    }
  },
  methods: {
    incr() {
      let t = this.a;
      let nums = [2, 3, 8, 12];
      for (let num of nums) {
        t += num;
        console.log(t);
      }
      this.a = t;
    }
  },

  created() {
    console.log(this.aDouble) // => 2
    console.log(this.aPlus) // => 2

    this.aPlus = 3
    console.log(this.a) // => 2
    console.log(this.aDouble) // => 4
  }
}
</script>





<template>
  <table class="tab">
    <div @click="incr">{{ a }}</div>
  </table>
</template>


<style>
.tab {
  background: red;
  padding: 5px;
}
</style>
