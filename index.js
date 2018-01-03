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
    updateFirst: function (evt) {
      this.first = getRandomInt();
      evt.stopPropagation();
    },
    updateSecond: function (evt) {
      this.second = getRandomInt();
      evt.stopPropagation();
    },
    update: function (evt) {
      this.first = getRandomInt();
      this.second = getRandomInt();
    }
  }
});

function getRandomInt() {
  var min = 1;
  var max = 9;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}