// Add element in an array without deleting existing one and shift them as well.........................

const arr = [23, 232, 5634, 3223, 633, 234];

const addValue = () => {
  let targetIdx = 3;
  let targetValue = 342;

  for (let i = arr.length - 1; i >= targetIdx; i--) {
    if (i > targetIdx) {
      arr[i + 1] = arr[i];
    } else if (i === targetIdx) {
      arr[i] = targetValue;
    }
  }
  console.log(arr);
};

addValue();