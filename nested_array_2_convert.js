'use strict'

/*
PSEUDOCODE

1. buat variabel menampung sebuah array kosong
2. buat juga variabel untuk menampung sebuag object literal kosong
3. lalu loop dari i = 1 sepanjang parameter dengan increment sebanyak 1
  3.a. parameter dengan index [0] akan menjadi key daripada object kita
  3.b. lalu masukkan isi dari setelah index ke 1 menjadi value dari key object kita
  3.c. push object ke dalam array
  3.d. kosongkan object
4. return array;
*/

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
  var arr = [];
  var obj = {};
  for (var i = 1; i < nestedArray.length; i++) {
    obj[`${nestedArray[0][0]}`] = nestedArray[i][0];
    obj[`${nestedArray[0][1]}`] = nestedArray[i][1];
    obj[`${nestedArray[0][2]}`] = nestedArray[i][2];
    obj[`${nestedArray[0][3]}`] = nestedArray[i][3];
    arr.push(obj);
    obj = {};
  }
  return arr
}

let object_roster = convert_roster_format(roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}
