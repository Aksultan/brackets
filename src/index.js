module.exports = function check(str, bracketsConfig) {
  bracketsConfig = [].concat.apply([],bracketsConfig)
  return str.split("").reduce((x, y)=>((x[x.length-1]==bracketsConfig[bracketsConfig.lastIndexOf(y)-1]&&bracketsConfig.lastIndexOf(y)%2!=0)?x.pop():x.push(y),x),[]).length>0?false:true
}
