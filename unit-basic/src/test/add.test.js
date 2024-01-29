const add = require('../add.js');

// npm i @types/jest, jest에서 제공하는 타입 정보 설치

/**
 * "어떤 범위까지 테스트 할 것인가" 어려움 -> 실제 프로젝트에서 적용
 */

test('add', () => {
  // 여기서 테스트 코드 작성!
  expect(add(1, 2)).toBe(3);
});
