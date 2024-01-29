const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenCalledWith('yes');
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});

/**
 * 이처럼 mock 함수를 이용하면 우리가 실제로 함수를 구현하지 않아도
 * 간편하게 함수가 몇번 호출되었는지, 어떤 인자값을 가지고 호출되었는지 테스트 할 수 있다.
 */
