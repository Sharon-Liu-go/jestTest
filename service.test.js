const serviceA = require('./serviceA')
const serviceB = require('./serviceB')
// jest.mock('./serviceB', () => { // mock rpc 發送
//   const originalModule = jest.requireActual('./serviceB');
//   return {
//     __esModule: true,
//     ...originalModule,
//     funcA: jest.fn(),
//   };
// });


describe('service A', () => {
  // test('call func B successful', () => {
  //   let res = serviceA.funcA()
  //   //如果回來是object就用toEqual
  //   // expect(res.service).toBe("thirdParty");
  //   // expect(res.port).toBe(1010);
  //   expect(res).toEqual({ service: "thirdParty", port: 1010 })
  // });

  // test('mock func Ａ successful', () => {
  //   serviceA.funcA = jest.fn().mockReturnValue({ service: "vendor", port: 2010 })
  //   let res = serviceA.funcA()
  //   expect(res).toEqual({ service: "vendor", port: 2010 })
  // });


  //他無法mockB function call A時，not working

  // test('mock func B successful', () => {
  //   serviceB.funcB = jest.fn().mockReturnValue({ service: "vendor", port: 2010 })
  //   let res = serviceA.funcA()
  //   expect(res).toEqual({ service: "vendor", port: 2010 })
  // });


  //mock service B
  //serviceB.funcB就是mock function,然後再mockReturnValue設定要回傳的值，這種方式呼叫A時，會有呼叫funB的次數，但就不會進入到funcB裏面
  // test('mock func B successful', () => {
  //   serviceB.funcB.mockReturnValue({ service: "vendor", port: 2010 })
  //   let res = serviceA.funcA()
  //   expect(serviceB.funcB).toHaveBeenCalled();
  //   expect(res).toEqual({ service: "vendor", port: 2010 })
  // });




  //test this
  // test('call service A func B successful', async () => {
  //   serviceB.funcB.mock({ service: "vendor", port: 2010 })

  //   let res = await promisefiedAsyncfunc('', serviceA.funcB)
  //   console.log(res)
  //   expect(res).toEqual({ service: "vendor", port: 2010 })
  // });

  test('mock service B and mock implement funB , including service C ,call func C and call this func C1', async () => {
    //serviceB.funcB1.mockImplementationOnce(() => { return "jab" })
    let res = await promisefiedAsyncfunc('', serviceA.funcA2)
    expect(serviceB.funcB).toHaveBeenCalled();
    expect(res).toBe("hoho")
  })
});


function promisefiedAsyncfunc(param, fn) {
  return new Promise((r, j) => {
    serviceA.funcA2(param, (data) => {
      r(data);
    });
  });
};
// function promisefiedAsyncfunc(param, fn) {
//   return new Promise((r, j) => {
//     console.log('fn', fn)
//     fn(param, (data) => {
//       r(data);
//     });
//   });
// };


//jest: 可以確認這個非同步有沒有跑完才繼續下一個