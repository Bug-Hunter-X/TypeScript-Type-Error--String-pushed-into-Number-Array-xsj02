function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

let arr1: number[] = [1, 2, 3];
arr1.push("hello"); //Type 'string' is not assignable to type 'number'.
let arr2: number[] = [4, 5, 6];
let combinedArr: number[] = combine(arr1, arr2);