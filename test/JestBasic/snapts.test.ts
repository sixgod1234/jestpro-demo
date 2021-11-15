import { generateConfig } from "../../src/JestBasic/snapts";

test("测试 generateConfig ", () => {
  // 1.普通匹配，每次修改配置时，都需要修改测试用例代码
  // expect(generateConfig()).toEqual({
  //   server: 'http://localhost',
  //   port: 8080,
  //   domain: 'localhost'
  // })
  // 2.使用快照匹配
  expect(generateAnotherConfig()).toMatchSnapshot();
});

import { generateAnotherConfig } from "../../src/JestBasic/snapts";

test("测试 generateAnotherConfig ", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "age": 20,
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
