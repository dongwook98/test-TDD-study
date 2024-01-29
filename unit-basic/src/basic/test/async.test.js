const fetchProduct = require('../../async.js');

/**
 * 비동기 코드 테스트 하는 방법
 *
 * 1) done 방식 -> 시간도 오래걸림, 잘 안씀
 * 2) return 방식
 * 3) await 방식
 * 4) resolves 방식
 * 5) rejects 방식
 */
describe('Async', () => {
  it('async - ❌', () => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
    // fetchProduct 실행해놓고 프로미스가 끝났는지 안끝났는지 상관하지않고 이 코드 블럭은 끝남
    // 그래서 jest입장에서는 이 it이 별도의 expect를 거치지않고 pass가 됌
    // 우리가 원하는것은 프로미스가 끝나고 프로미스의 결괏값을 비교하는 것
  });

  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done(); // 수동적으로 우리가 끝나는 시점 명시
    });
  });

  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - resolves', async () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });

  it('async - rejects', async () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
