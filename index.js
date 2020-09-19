var app1 = new Vue({
  el: "#app",
  data: {
    locked: false,
    first: 1,
    second: 1,
    answer: "?",
    numbers: [2, 3, 4, 5, 6, 7, 8, 9],
  },
  methods: {
    next: function (number) {
      if (this.locked) return;

      const self = this;
      this.locked = true;
      this.first = number;
      this.second = this.numbers[getRandomInt(this.numbers.length - 1)];
      this.answer = "?";
      setTimeout(function () {
        self.answer = self.first * self.second;
        self.locked = false;
      }, 3000);
    },
  },
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
