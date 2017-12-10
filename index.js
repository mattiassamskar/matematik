var app = new Vue({
  el: '#app',
  mounted: function () {
    this.update();
  },
  data: {
    first: 0,
    second: 0
  },
  methods: {
    update: function () {
      this.first = getRandomIntInclusive(1, 9);
      this.second = getRandomIntInclusive(1, 9);
    }
  }
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}