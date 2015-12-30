var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  //hasTimestamps: false,
  initialize: function(username, password){
    console.log('user model init');
    console.log(username);
  },
});

module.exports = User;


// var Employee = Backbone.Model.extend({
//     initialize: function(attributes, options) {
//         this.company = options.company;
//     }
// });
// var shesek = new Employee({name: 'Nadav'}, {company: Foobar});


// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   clicks: function() {
//     return this.hasMany(Click);
//   },
//   initialize: function(){
//     this.on('creating', function(model, attrs, options){
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// module.exports = Link;
