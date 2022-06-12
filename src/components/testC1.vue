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
    increment() {
      this.count++
    },

    greet(event) {
      // `this` inside methods points to the current active instance
      alert(`Hello ${this.count}!`)
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },

    color(event) {
      alert('id-- ' + event.target.id)
    },

    color2(str) {
      if (str === 'add') {
        //alert('str = add');
        alert(this.MyRGB.red)
      }
    }

  }
}
</script>

<template>
<div>
  <button @click="greet">Greet</button>
  <button id="red" @click="color">color</button>
  <button id="red" @click="color2('add')">color2</button>
  <button @click = "increment" type="button" name="button">increase</button>

<p>Counter   {{count}} </p>
</div>
</template>
