function removeUnrelated(object, key){
    delete object[key]
    return object

}   

console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'hobbies'))