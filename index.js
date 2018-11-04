var app1 = new Vue({
  el: "#app",
  data: {
    locked: false,
    first: 1,
    second: 1,
    answer: "?",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  methods: {
    init: function(number) {
      if (this.locked) return;

      this.first = number;
      this.second = 1;
    },
    next: function() {
      if (this.locked) return;

      this.locked = true;
      this.answer = "?";
      this.second = this.second + 1;
      this.calc();
    },
    calc: function() {
      const self = this;
      setTimeout(function() {
        self.answer = self.first * self.second;
        self.locked = false;
      }, 3000)
    }
  }
});
