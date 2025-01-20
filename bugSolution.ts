function combine(arr1: (number | string)[], arr2: number[]): (number | string)[] {
  return arr1.concat(arr2);
}

let arr1: (number | string)[] = [1, 2, 3];
arr1.push("hello");
let arr2: number[] = [4, 5, 6];
let combinedArr: (number | string)[] = combine(arr1, arr2); 