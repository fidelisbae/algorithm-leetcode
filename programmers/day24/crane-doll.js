// 크레인 인형뽑기 게임

function solution(board, moves) {
  // moves에서 특정 열을 입력 받으면 0번째 행부터 검사해서 0이 아닌 값을 doll 배열에 푸쉬
  // doll배열에서 전 인덱스의 값과 현재 인덱스의 값이 같으면 pop두번 하고 카운트 +2
  // 리턴 카운트
  let newDoll;
  let count = 0;
  let check;
  let doll = [];
  for (let i = 0; i < moves.length; i++) {
    check = true;
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0 && check) {
        newDoll = board[j][moves[i] - 1];
        if (doll[doll.length - 1] === newDoll) {
          doll.pop();
          count = count + 2;
        } else {
          doll.push(newDoll);
        }
        board[j].splice(moves[i] - 1, 1, 0);
        check = false;
      }
    }
  }
  return count;
}
