module.exports = function check(str, bracketsConfig) {
  let brack = [].concat.apply([],bracketsConfig)
  return str.split("").reduce((x, y)=>(( x[x.length-1]==brack[brack.lastIndexOf(y)-1] && brack.lastIndexOf(y)%2 )?x.pop():x.push(y),x),[]).length==0
}
