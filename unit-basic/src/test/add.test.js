const add = require('../add.js');

// npm i @types/jest, jest에서 제공하는 타입 정보 설치

test('더하기', () => {
  // 테스트 코드 작성!
  expect(add(1, 2)).toBe(3);
});
