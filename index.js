var _ = require('lodash');

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

var testFindWhere = _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
// => 'barney'

var users1 = [
  { 'user': 'barneybarney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

var testFind = _.result(_.find(users1, function(chr) {
  return chr.age < 40;
}), 'user');
// => 'barneybarney'

module.exports.testFindWhere = testFindWhere;
module.exports.testFind = testFind;
