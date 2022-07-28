// 비밀지도

function solution(n, arr1, arr2) {
  let result = [];
  let str = "";
  for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
      console.log(arr1[i].toString(2).padStart(n, "0"));
      if (
        arr1[i].toString(2).padStart(n, "0")[j] === "0" &&
        arr2[i].toString(2).padStart(n, "0")[j] === "0"
      ) {
        str = str + " ";
      } else {
        str = str + "#";
      }
    }
    result.push(str);
  }
  return result;
}
