// 1.toBe toEqual
test('相等匹配',() => {
    expect(1+1).toBe(2)
    expect({a:1,b:[1,2]}).toEqual({a:1,b:[1,2]})
    expect(1+1).not.toBe("2")
})

// 2.Truth匹配
test('Truth匹配',() => {
    let testValue;
    let testValue2 = 1;
    expect(NaN).toBeNaN()
    expect(null).toBeNull()
    expect(testValue).toBeUndefined()
    expect(testValue2).toBeDefined()
    expect(1).toBeTruthy()
    expect(NaN).toBeFalsy()
})

// 3.比较匹配器
test('比较匹配器',() => {
    expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
    expect(0.2 + 0.1).toBeGreaterThan(0.3);
    expect(0.2 + 0.1).toBeGreaterThanOrEqual(0.3);
    expect(0.2 + 0.1).toBeLessThan(0.35);
    expect(0.2 + 0.1).toBeLessThanOrEqual(0.4);
})

// 4.sring匹配
test('sring匹配',() => {
    const essay = 'hello react ! a greateful day!'
    expect(essay).toMatch('react')
    expect(essay).toMatch(/react/)
})

// 5.array 和 iterable 匹配
test('array 和 iterable 匹配',() => {
    const essay = ['hello',9]
    expect(essay).toContain('hello')
})
// 6.Exceptions 匹配器
test('Exceptions 匹配器',() => {
    function testError(){
        throw new Error('wrong wrong wrong')
        // return new Error('wrong wrong wrong')不会抛出错误
        // 会被提示”Received function did not throw“。需要用throw
    }
    expect(testError).toThrow()
    expect(testError).toThrow('wrong wrong wrong')
})


