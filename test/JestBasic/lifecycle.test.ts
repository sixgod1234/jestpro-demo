// 1.生命周期
beforeAll(() => {console.log('beforeAll');}) // beforeAll在作用域下所有test执行之前执行
beforeEach(() => {console.log('beforeEach'); }) // beforeEach在作用域下所有test执行之后执行
afterEach(() => {console.log('afterEach');}) // afterEach在作用域下每一次test执行之前执行
afterAll(() => {console.log('afterEach');}) // afterAll在作用域下每一次test执行之后执行
test('测试一',() => {console.log('测试一');})
test('测试二',() => {console.log('测试二');})

// 2.分组describe
describe('测试分组一',() => {
    beforeAll(() => {console.log('测试分组一beforeAll');})
    beforeEach(() => {console.log('测试分组一beforeEach'); })
    afterEach(() => {console.log('测试分组一afterEach');})
    afterAll(() => {console.log('测试分组一afterEach');})
    test('1.1',()=> {console.log('1.1');})
    test('1.2',()=> {console.log('1.2');})
})

// 3.describe和test执行顺序,
describe('测试分组三',() => {
    console.log('describe3');
    
    test('3.1',()=> {console.log('3.1');})

    describe('测试三一',() => {
        console.log('describe3.1');
        test('3.1.1',()=> {console.log('3.1.1');})
    })

    test('3.2',()=> {console.log('3.2');})
})

describe('测试分组二',() => {
    console.log('describe2');
    
    test('2.1',()=> {console.log('2.1');})

    describe('测试二一',() => {
        console.log('describe2.1');
        test('2.1.1',()=> {console.log('2.1.1');})
    })

    test('2.2',()=> {console.log('2.2');})
})