describe('延时器相关测试', () => {
    let timer = null
    afterEach(() => {
        clearTimeout(timer)
    })
    // 开启定时函数模拟
    jest.useFakeTimers();
    // console.log('1');
    
    function foo(callback) {
        console.log('foo...')
        timer = setTimeout(() => {
            callback && callback();
        }, 1000)
    }
    it('断言异步延时测试', () => {
        // console.log('1.1');
        //创建mock函数，用于断言函数被执行或是执行次数的判断
        const callback = jest.fn();
        foo(callback);
        expect(callback).not.toBeCalled();
        //快进，使所有定时器回调
        jest.runAllTimers();
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1)
    })
    // jest.useRealTimers()
    // console.log('2');
    it('断言异步测试', () => {
        // console.log('2.1');
    //    jest.useRealTimers()
        //创建mock函数，用于断言函数被执行或是执行次数的判断
        const callback = jest.fn();
        foo(callback);
        expect(callback).not.toBeCalled();
        //快进使所有定时器快进1000毫秒
        jest.advanceTimersByTime(1000)
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1)
    })
});

describe('定时器的相关测试',() => {
    jest.useFakeTimers()
    let timer = null
    afterEach(() => {
        clearInterval(timer)
    })
    const intervalCallback = (fn) => {
        timer = setInterval(() => {
            fn && fn()
        },1000)
    }
    it('定时器测试',() => {
        const fn = jest.fn()
        intervalCallback(fn)
        expect(fn).not.toBeCalled();
        //快进，使所有定时器回调会进行无限次
        // jest.runAllTimers();
          // 只把当前挂起的把所有的定时器执行
        jest.runOnlyPendingTimers()
        // 这里判断是否调用
        expect(fn).toBeCalled()
        expect(fn).toHaveBeenCalledTimes(1)
        jest.advanceTimersByTime(1000)
        expect(fn).toHaveBeenCalledTimes(2)
    })        
})