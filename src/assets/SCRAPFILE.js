
///////////
<div id="foo" v-on:click="select($event)">...</div>

//The event is passed on in javascript:

export default {
    methods: {
        select: function(event) {
            targetId = event.currentTarget.id;
            console.log(targetId); // returns 'foo'
        }
    }
}
/////////////

<button @click="greet">Greet</button>

///////////

methods: {
  greet(event) {
    // `this` inside methods points to the current active instance
    alert(`Hello ${this.name}!`)
    // `event` is the native DOM event
    if (event) {
      alert(event.target.tagName)
    }
  }
}
/////

@click="addToCount(item.contactID)"

/////////////////
//composite function??
<div @click="f3()"></div>

<script>
var app = new Vue({
  // ...
  methods: {
    f3: function() { f1() + f2(); }
    f1: function() {},
    f2: function() {}
  }
})
</script>

//////////////////////
//handlers watch..imediate
///////////////////////////////////
data() {
   return {
    value:''
   };
  },
  watch:{
   value:{
    handler:'init',
    immediate:true
   }
  },
  methods: {
   init(){
    alert(1)
   }
  }
  //////////////////////////////////
  ///timers
  //////////////////////////////////
  new Vue({
  el: "#app",
  data: {
    time: ''
  },
  computed: {
    computedValue: function(){
        return this.time;
    }
  },
  mounted: function(){
    var app = this;
    setInterval(function(){
      app.time = parseInt(new Date().getTime() / 1000);
        }, 1000);
  }
})
////////////////////

You can declare a time-dependent data variable and use setInterval() to update it:

data() {
    return {
        events: [],
        now: Date.now()
    }
},
created() {
    var self = this
    setInterval(function () {
         self.now = Date.now()
    }, 1000)
},
computed: {
    upcomingEvents() {
        return this.events.filter(event => event.isUpcoming(this.now))
    },
    liveEvents() {
        return this.events.filter(event => event.isLive(this.now))
    },
    previousEvents() {
        return this.events.filter(event => event.isPrevious(this.now))
    }
}
////////////////////////
const CounterApp = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    this.interval= setInterval(() => {
      this.counter++
    }, 1000)
  },
  methods: {
    stop() {
      clearInterval(this.interval)
    }
  }
}
//////////////////////////////
methods: {
    startTimer(){
            timerObj = window.setInterval(this.timerTick, 1000);
            this.timerFormat();
        },

        stopTimer(){
            window.clearInterval(timerObj);
            timerObj = null;
        },

        timerTick(){
            if (this.timerLength != 0) {
                this.timerLength -= 1;
                this.timerBarWidth();
                this.timerFormat();
            } else {
                this.stopTimer();
                // Some broadcast stuff to disable answering
            }
        },

        timerFormat(){
            let minutes = Math.floor(this.timerLength / 60);
            let seconds = this.timerLength % 60;

            if (seconds < 10){ seconds = "0"+seconds; }
            if (minutes < 10){ minutes = "0"+minutes; }
            this.timerDisplay = minutes + ":" + seconds;
        },

        timerBarWidth(){
            let amount = 100/this.timerseconds;
            this.timerWidth -= amount;
        }
    },

mounted(){
        if (this.timer == "true"){
            this.startTimer();
        } else {
            this.timerWidth = 0;
        }
    }
