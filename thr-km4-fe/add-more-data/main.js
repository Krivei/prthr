function addMoreData(object, key, value) {
  function temp(key,value){
    this[key] = value
  }

  const tempObject = new temp(key,value)
  var result = Object.assign(object,tempObject)
  return result
}

console.log(addMoreData({ name: 'Edo', age: 20 }, 'address', 'Jakarta'))