// 1.jest.fn
test('测试jest.fn()调用', () => {
    let mockFn = jest.fn();
    // 传入参数1，2，3
    let result = mockFn(1, 2, 3);
    mockFn('two');
    // 测试断言次数
   expect.assertions(6)
    // 断言mockFn的执行后返回undefined
    expect(result).toBeUndefined();
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
    // 断言mockFn被调用了2次
    expect(mockFn).toBeCalledTimes(2);
    // 断言mockFn传入的参数为1, 2, 3。每次的参数都会记录
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    // 断言mockFn第一次传入的参数为1
    expect(mockFn).toHaveBeenNthCalledWith(1,1,2,3);
    // 断言mockFn最后一次传入的参数为3
    expect(mockFn).toHaveBeenLastCalledWith('two');
  })

  test('修改jest.fn()返回固定值和内部实现', () => {
    //   修改默认返回值，必须在最开始修改才有效
    let mockFn = jest.fn().mockReturnValue('default');
    // 断言mockFn执行后返回值为default
    expect(mockFn()).toBe('default');
    let mockFn2 = jest.fn((num1, num2) => {
        return num1 + num2;
      })
      // 断言mockFn执行后返回20
      expect(mockFn2(10, 10)).toBe(20);
  })
  
  test('测试jest.fn()返回Promise', async () => {
    let mockFn = jest.fn().mockResolvedValue('default');
    let result = await mockFn();
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe('default');
    // 断言mockFn调用后返回的是Promise对象
    expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
  })

  test('测试jest.fn()返回Promise', async () => {
    let mockFn = jest.fn().mockResolvedValue('default');
    let result = await mockFn();
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe('default');
    // 断言mockFn调用后返回的是Promise对象
    expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");

    const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));
    await asyncMock(); // throws "Async error"
  })

// 2.jest.mock()
import mockTest from '../../src/JestBasic/mockTest';
import fetch from '../../src/JestBasic/fetch';


import axios from 'axios';
import Users from '../../src/JestBasic/users';
jest.mock('axios');
jest.mock('../../src/JestBasic/fetch');

describe('jest.mock',() => {
  test('mock 整个 fetch.js模块', async () => {
    expect.assertions(2);
    await mockTest.getPostList();
    expect(fetch.fetchPostsList).toHaveBeenCalled();
    expect(fetch.fetchPostsList).toHaveBeenCalledTimes(1);
  });

  test('mock返回数据', async () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    // 只有jest.mock()了的axios,jest才会给.get提供一个mockResolvedValue
    axios.get.mockResolvedValue(resp);
    return Users.all().then(data => expect(data).toEqual(users));
  });
})

// 3.jest.spy()
test('使用jest.spyOn()监控fetch.fetchPostsList被正常调用', async() => {
    expect.assertions(2);
    const spyFn = jest.spyOn(fetch, 'fetchPostsList');
    await mockTest.getPostList();
    expect(spyFn).toHaveBeenCalled();
    expect(spyFn).toHaveBeenCalledTimes(1);
  })

