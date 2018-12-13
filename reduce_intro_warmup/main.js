
//add all elements together
// function sum(arr) { 
//   let sumAll = arr.reduce((acc, cur) => acc + cur, 0) 
// return sumAll
// }

function sum(arr) { 
  return arr.reduce((acc, cur) => acc + cur, 0) 
}

// multiply all elements together
function multiply(arr){
  return arr.reduce((acc, cur) => acc * cur, 1)
}

//double each element using reduce
function double(arr){
  return arr.reduce((acc, cur) => acc += cur * 2)
}

// //count the letters

function countLetters(str){
  let string = []
  for (let i=0; i < str.length; i++){
    string[i] = str[i]
  }
 
  return string.reduce((prev, cur) => {
    // if (prev[cur] === undefined) {
    //   prev[cur] = 1
    // } else {
    //   prev[cur]++
    // }

    // prev[cur] = (prev[cur] || 0) + 1
    prev[cur] = prev[cur] === undefined ? prev[cur] = 1 : prev[cur]+1
    
    return prev
  }, {})
}

countLetters(str)




module.exports = {
  sum: sum,
  multiply: multiply,
  double: double,
  countLetters: countLetters
}
