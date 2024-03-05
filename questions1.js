// Add element in an array without deleting existing one and shift them as well.........................

const arr = [23, 232, 5634, 3223, 633, 234];

const addValue = () => {
  let targetIdx = 1;
  let targetValue = 342;

  for (let i = arr.length-1; i >= targetIdx; i--) {
    if (i >= targetIdx) {
      arr[i + 1] = arr[i];
     if (i === targetIdx) {
      arr[i] = targetValue;
    }
  }
}
  console.log(arr);
};

addValue();

// Remove an Item from an Array..................

const arr2 = [23, 232, 5634, 3223, 633, 234];

const removeValue = () => {
  let targetIdx = 3;

  for (let i = targetIdx; i < arr2.length-1; i++) {
    console.log(i);
    arr2[i] = arr[i+1]
  }
  console.log(arr2);
  arr2.length = arr2.length - 1

  console.log(arr2);
};

removeValue();