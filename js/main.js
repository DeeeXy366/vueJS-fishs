let app = new Vue({
  el: '#app-my',
  data: {
    pl: '',
    score: 0,
    your_score: false,
    seen: true,
    warring: false,
    seen_bf1: true,
    seen_bf2: false,

    seen_mf1: true,
    seen_mf2: true,
    seen_mf3: true,
    seen_mf4: false,
    seen_mf5: true,
    seen_mf6: false,

    seen_sf1: true,
    seen_sf2: true,
    seen_sf3: true,
    seen_sf4: true,
    seen_sf5: true,
    seen_sf6: false,
    seen_sf7: true,
    seen_sf8: false,
    seen_sf9: true,
    seen_sf10: false,
    currentTime: 60,
    timer: null,
  },
  mounted() {
    this.startTimer()
  },
  destroyed() {
    this.stopTimer()
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
      this.seen = true;
      this.your_score = true;
      this.startTimer();
    },
    newGame: function(){
      if(this.pl == ''){this.warring = true;}
      else{this.currentTime = 60; this.score = 0; this.your_score = false; this.warring = false; this.seen = false;}
    },
    score_bf1: function(){
      this.score += 1;
      this.seen_bf2 = true;
      this.seen_bf1 = false;
    },
    score_bf2: function(){
      this.score += 1;
      this.seen_bf1 = true;
      this.seen_bf2 = false;
    },

    score_mf1: function(){
      this.score += 2;
      this.seen_mf4 = true;
      this.seen_sf2 = true;
      this.seen_mf1 = false;
    },
    score_mf2: function(){
      this.score += 2;
      this.seen_mf5 = true;
      this.seen_mf2 = false;
    },
    score_mf3: function(){
      this.score += 2;
      this.seen_mf6 = true;
      this.seen_mf3 = false;
    },
    score_mf4: function(){
      this.score += 2;
      this.seen_mf1 = true;
      this.seen_sf7 = true;
      this.seen_mf4 = false;
    },
    score_mf5: function(){
      this.score += 2;
      this.seen_mf2 = true;
      this.seen_mf5 = false;
    },
    score_mf6: function(){
      this.score += 2;
      this.seen_mf3 = true;
      this.seen_sf5 = true;
      this.seen_mf6 = false;
    },

    score_sf1: function(){
      this.score += 3;
      this.seen_sf6 = true;
      this.seen_sf1 = false;
    },
    score_sf2: function(){
      this.score += 3;
      this.seen_sf7 = true;
      this.seen_sf2 = false;
    },
    score_sf3: function(){
      this.score += 3;
      this.seen_sf8 = true;
      this.seen_sf3 = false;
    },
    score_sf4: function(){
      this.score += 3;
      this.seen_sf9 = true;
      this.seen_sf2 = true;
      this.seen_sf4 = false;
    },
    score_sf5: function(){
      this.score += 3;
      this.seen_sf10 = true;
      this.seen_sf5 = false;
    },
    score_sf6: function(){
      this.score += 3;
      this.seen_sf1 = true;
      this.seen_sf6 = false;
    },
    score_sf7: function(){
      this.score += 3;
      this.seen_sf2 = true;
      this.seen_sf3 = true;
      this.seen_sf7 = false;
    },
    score_sf8: function(){
      this.score += 3;
      this.seen_sf3 = true;
      this.seen_sf8 = false;
    },
    score_sf9: function(){
      this.score += 3;
      this.seen_sf4 = true;
      this.seen_sf9 = false;
    },
    score_sf10: function(){
      this.score += 3;
      this.seen_sf5 = true;
      this.seen_sf7 = true;
      this.seen_sf10 = false;
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer()
      }
    }
  },
})
