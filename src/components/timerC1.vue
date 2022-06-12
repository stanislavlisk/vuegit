<template>
<p>TIME LEFT:  {{time}}  SCORE:  {{score}} LEVEL:  {{level}}</p>

<p>{{text1}}</p>
<button @click="addtime">ADD!!!</button>

</template>







<script>
export default {
  data() {
    return {
      time: 10,
      score: 0,
      level: 1,
      gameover: false,
      text1: '',
      levelmod: 3
    }
  },
//////////////////////////////
  methods: {

    timer() {
      if (this.time > 0) {
            this.time -= 1;
            this.score += 1;
      } else {
        this.gameover = true;
      }
    },
    addtime() {
      if (this.gameover == false) {
        this.time += 2 * this.level;
      }
    },
    gameend() {
      console.log('gameover');
      this.text1 = 'GAME OVER';

    },

    levelup() {
      this.level += 1;

    }

  },
/////////////////////////////
  watch: {
    time(newValue, oldValue) {
      if (this.gameover == false) {
        setTimeout(() => {
          this.timer();
        }, 1000);
      }
    },
    gameover() {
      if (this.gameover == true) {
        this.gameend();
      }
    },
    score() {
      if(this.time == this.levelmod) {
        this.levelup();
        this.levelmod += this.level * 2;

      }
    }
  },

//////////////////////////////
  created() {
    this.timer();
    console.log(this.time);

  }







}
</script>





<style>
</style>
