var users = {};

module.exports = {
      add: function(number, data) {
          users[number] = data;
      },
      
      get: function(number) {
          return users[number] || null;
      },

      getAll: function() {
          var userValues = Object.keys(users)
                            .map(function(key) {
                                return users[key];
                            });
         return userValues || [];
                                
      },

      clearAll: function() {
        users = {};
      }
};