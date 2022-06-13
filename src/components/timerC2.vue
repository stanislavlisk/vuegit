
<template>
<p>TIME LEFT: {{time}}  {{t1}}</p>


<p>{{settime}} ms</p>
<input v-model="settime"/>
<button @click="starttimer">START</button>
<button @click="cleartimer">STOP</button>
<p>uodate</p>

</template>




<script>
export default {
  data() {
    return {
      time: 0,
      start: false,
      settime: 0,
      pausetime: 0
    }

  },

  methods: {
    starttimer() {
      if (this.time > 0) {
        this.time = this.pausetime;
        this.start = true;
      } else {
        this.time = this.settime
        this.start = true;

      }

    },

    cleartimer() {
      this.pausetime = this.time;
      this.start = false;
      console.log(this.start);
      clearInterval(this.interval);
    },

    checktime() {
      console.log('checking time');
      if (this.time <= 0) {
        this.cleartimer();
        this.time = 0;
        console.log('try clear');
      }
    }

  },

  computed: {
    t1: function() {
      if (this.start == true) {
        this.interval = setInterval(() => {
          this.time--, this.checktime()
        }, 100)
      } else {
        this.cleartimer();
      }
    }
  },

  watch: {
    settime(newValue, oldValue) {
      this.time = this.settime;
      }
    }







}
</script>






<style>
</style>
