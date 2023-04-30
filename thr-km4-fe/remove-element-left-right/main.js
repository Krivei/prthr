function removeLeftRight(arr, position) {
  hasil = arr;
  if (position=="left") {
    arr.shift();
  } else if(position=="right"){
    arr.pop();
  }
  return arr;
}

console.log(removeLeftRight([1, 2, 3, 4, 5], 'right'))