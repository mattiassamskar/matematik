var app = new Vue({
  el: '#app',
  mounted: function () {

  },
  data: {
    first: 0,
    second: 0
  },
  methods: {
    update: function () {
      this.first = getRandomInt(0, 9);
      this.second = getRandomInt(0, 9);
    }
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}