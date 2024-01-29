const Calculator = require('../calculator.js');

/**
 * test함수들을 묶는 describe
 * 서로 연관있는 테스트들을 Calculator라고 묶어줌
 * it은 Calculator를 가르킴
 */
describe('Calculator', () => {
  // ✨ 각각의 테스트는 서로 독립적으로 동작하도록 만들어야함
  // beforeEach는 각각의 테스트를 실행하기전에 동작하기 때문에 각각의 테스트마다 새로운 오브젝트 생성함
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(9);
    cal.add(5);
    expect(cal.value).toBe(14);
  });

  it('subtract', () => {
    cal.subtract(2);
    expect(cal.value).toBe(-2);
  });

  it('multiply', () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  /**
   * 나눗셈은 여러가지 상황이 나오기 떄문에 각각의 상황별로 테스트를 나누고
   * 서로 연관있는 테스트들을 divides라고 묶어줌
   */
  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
