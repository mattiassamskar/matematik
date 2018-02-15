var app1 = new Vue({
  el: '#app1',
  mounted: function () {
    this.update();
  },
  data: {
    first: 0,
    second: 0
  },
  methods: {
    updateFirst: function (evt) {
      this.first = getRandomInt(1, 9);
      evt.stopPropagation();
    },
    updateSecond: function (evt) {
      this.second = getRandomInt(1 ,9);
      evt.stopPropagation();
    },
    update: function (evt) {
      this.first = getRandomInt(1 ,9);
      this.second = getRandomInt(1 ,9);
    }
  }
});

var app2 = new Vue({
  el: '#app2',
  mounted: function () {
    this.update();
  },
  data: {
    first: 0,
    second: 0
  },
  methods: {
    update: function (evt) {
      this.first = getRandomInt(100, 900);
      this.second = getRandomInt(10 ,99);
    }
  }
});

var app3 = new Vue({
  el: '#app3',
  mounted: function () {
    this.update();
  },
  data: {
    first: 0,
    second: 0
  },
  methods: {
    update: function (evt) {
      this.first = getRandomInt(100, 900);
      this.second = getRandomInt(10 ,99);
    }
  }
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}