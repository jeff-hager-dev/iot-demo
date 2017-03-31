var colors = {};

module.exports = {
      set: function(number, color) {
          colors[number] = '#'+color;
      },
      get: function(number) {
          return colors[number] || "#0000ff";
      }
};