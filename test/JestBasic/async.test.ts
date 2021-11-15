import fetch from '../../src/JestBasic/fetch'
test('异步测试', (done) => {
    fetch.fetchData((data) => {
        expect(data).toEqual({code:200})
        done()
    })
})

test('异步测试2', () => {
     	expect.assertions(1)
        return fetch.fetchData2().then((data) => {
            expect(data.data).toEqual({code:200})
        }).catch(error => {console.log('error',error)})
    })
    
test('异步测试3', async() => {
  	expect.assertions(1)
     await fetch.fetchData2().then((data) => {
         expect(data.data).toEqual({code:200})
     }).catch(error => {console.log('error',error)})
 })

 test('测试reject', () => {
        expect.assertions(1)
        return fetch.fetchData3().catch(e => expect(e.toString()).toMatch('Error'))
})