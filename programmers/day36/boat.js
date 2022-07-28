// 구명보트

function solution(people, limit) {
  let count = 0;
  people.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < people.length; i++) {
    if (people[i] + people[people.length - 1] <= limit && people.length >= 2) {
      count = count + 1;
      people.pop();
    } else {
      count = count + 1;
    }
  }

  return count;
}
