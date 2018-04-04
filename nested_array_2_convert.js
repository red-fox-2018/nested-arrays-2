'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
  // your convert code here
  var result = []
  // for(var i = 0; i < nestedArray[0].length; i++) {
  //   for(var j = 1; j < nestedArray.length; j++) {
  //     for(var k = 0; k < nestedArray[j].length; k++) {
  //       var obj = {
  //         [nestedArray[0][i]]: nestedArray[j][k]
  //       }
  //     }
  //   }
  //   result.push(obj)
  // }

  for(var i = 1; i < nestedArray.length; i++) {
    var obj = {}
    for(var j = 0; j < nestedArray[i].length; j++) {
      obj[nestedArray[0][j]] = nestedArray[i][j]
    }
    result.push(obj)
  }
  return result
}

let object_roster = convert_roster_format(roster)
console.log(object_roster[2])
// console.log(object_roster);

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}
