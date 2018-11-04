var app1 = new Vue({
  el: "#app",
  data: {
    first: 1,
    second: 1,
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  methods: {
    init: function(number) {
      this.first = number;
      this.second = 1;
    },
    next: function() {
      this.second = this.second + 1;
    }
  }
});
